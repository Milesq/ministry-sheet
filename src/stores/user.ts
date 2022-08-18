import { unimplemented } from '@/common'
import { Auth, type CognitoUser } from '@aws-amplify/auth'
import { defineStore } from 'pinia'

interface UserState {
  user: string | null
  name: string | null
  isAdmin: boolean
}

const DEFAULT_PASS = 'zaq1@WSX'

function transformUserName(name: string): string {
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
      const user = (await Auth.signIn(
        transformUserName(username),
        pass
      )) as CognitoUser
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const aUser = user as any

      if (aUser.challengeName === 'NEW_PASSWORD_REQUIRED') {
        await Auth.completeNewPassword(user, await newPasswordCb())
      }

      this.user = user.getUsername()

      const { name } = aUser.attributes as { name: string }
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
