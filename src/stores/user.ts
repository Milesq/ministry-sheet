import { defineStore } from 'pinia'

interface UserState {
  user: string | null
}

const useUser = defineStore('user', {
  state: (): UserState => ({
    user: null,
  }),
  getters: {
    isLoggedIn: state => !!state.user,
  },
  actions: {
    login(name: string) {
      this.user = name
    },
    logout() {
      this.$reset()
    },
  },
  persist: true,
})

export default useUser
