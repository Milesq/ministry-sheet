import { Auth, type CognitoUser } from '@aws-amplify/auth'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

interface UserState {
  user: string | null
  isAdmin: boolean
}

const DEFAULT_PASS = 'zaq1@WSX'

function transformUserName(name: string): string {
  return name.toLowerCase().replaceAll(/\s/g, '')
}

const useUser = defineStore('user', {
  state: (): UserState => ({
    user: null,
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
      })
    },
    async login(username: string) {
      const user = (await Auth.signIn(
        transformUserName(username),
        DEFAULT_PASS
      )) as CognitoUser

      this.user = user.getUsername()

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

      const router = useRouter()
      router.push({
        name: 'login',
      })
    },
  },
  persist: true,
})

export default useUser
