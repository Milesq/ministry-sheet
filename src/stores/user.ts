import { defineStore } from 'pinia'

interface UserState {
  user: string | null
}

const useUser = defineStore('user', {
  state: (): UserState => ({
    user: null,
  }),
  actions: {
    login() {
      this.user = 'Milesq'
    },
    logout() {
      this.$reset()
    },
  },
  persist: true
})

export default useUser
