import { unimplemented } from '@/common'
import { Auth, type CognitoUser } from '@aws-amplify/auth'
import { defineStore } from 'pinia'
import wait from 'waait'

interface UserState {
  user: string | null
  name: string | null
  isAdmin: boolean
}

const DEFAULT_PASS = 'zaq1@WSX'

export function transformUserName(name: string): string {
  return name.toLowerCase().replaceAll(/\s/g, '')
}

const useUser = defineStore('user', {
  state: (): UserState => ({
    user: null,
    name: null,
    isAdmin: false,
  }),
  getters: {
    isLoggedIn: state => !!state.user,
  },
  actions: {
    async requestAccess(username: string) {
      await Auth.signUp({
        username: transformUserName(username),
        password: DEFAULT_PASS,
        attributes: {
          name: username,
        },
      })
    },
    async login(
      username: string,
      pass: string = DEFAULT_PASS,
      newPasswordCb: () => Promise<string> = unimplemented
    ) {
      const signIn = async (paramPass?: string) =>
        (await Auth.signIn(
          transformUserName(username),
          paramPass || pass
        )) as CognitoUser
      let user = await signIn()

      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const newPass = await newPasswordCb()

        await Auth.completeNewPassword(user, newPass)

        user = await signIn(newPass)
      }

      this.user = user.getUsername()

      await wait(2000)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { name } = (user as any).attributes as { name: string }
      this.name = name

      await this.checkIfAdmin()
    },
    async checkIfAdmin() {
      if (!this.isLoggedIn) {
        return
      }

      const userPool = (await Auth.currentUserPoolUser()) as CognitoUser
      const { payload } = userPool.getSignInUserSession()!.getAccessToken()!

      const groups: string[] | undefined = payload['cognito:groups']

      if (groups?.includes('admins')) {
        this.isAdmin = true
      }
    },
    async logout(): Promise<void> {
      this.$reset()

      await Auth.signOut()
    },
  },
  persist: true,
})

export default useUser
