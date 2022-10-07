<script lang="ts">
import { defineComponent } from 'vue'
import { RestAPI } from '@aws-amplify/api-rest'
import { Auth } from '@aws-amplify/auth'

interface UnconfirmedUser {
  Username: string
  Attributes: [
    {
      Name: string
      Value: string
    }
  ]
}

interface ListUnconfirmedUsersResp {
  Users: UnconfirmedUser[]
}

export default defineComponent({
  data: () => ({
    users: [] as string[],
  }),
  async mounted() {
    this.users = await this.listUnconfirmedUsers()
  },
  methods: {
    async listUnconfirmedUsers(): Promise<string[]> {
      const apiName = 'AdminQueries'
      const path = '/listUnconfirmedUsers'
      const options = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession())
            .getAccessToken()
            .getJwtToken()}`,
        },
      }

      const { Users: users }: ListUnconfirmedUsersResp = await RestAPI.get(
        apiName,
        path,
        options
      )

      return users.map(
        user =>
          user.Attributes.find(attr => attr.Name === 'name')?.Value ||
          user.Username
      )
    },
  },
})
</script>

<template>
  <div>ok</div>
</template>
