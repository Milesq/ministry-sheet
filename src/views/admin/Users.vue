<script lang="ts">
import { defineComponent } from 'vue'
import { RestAPI } from '@aws-amplify/api-rest'
import { Auth } from '@aws-amplify/auth'
import CheckIcon from '~icons/mdi/check'
import EditableList from '@/components/EditableList.vue'
import type { Item } from '@/components/EditableList.vue'

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
  components: {
    EditableList,
    CheckIcon,
  },
  data: () => ({
    users: [] as Item[],
  }),
  async mounted() {
    this.users = await this.listUnconfirmedUsers()
  },
  methods: {
    async listUnconfirmedUsers(): Promise<Item[]> {
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

      return users.map(user => {
        let name = user.Attributes.find(attr => attr.Name === 'name')?.Value

        name ||= user.Username

        return {
          id: user.Username,
          name,
        }
      })
    },
    approve(user: string) {
      console.log(`Approved: ${user}`)
    },
    reject(user: string) {
      console.log(`Rejected: ${user}`)
    },
  },
})
</script>

<template>
  <div>
    <EditableList
      :items="users"
      :creatable="false"
      :editable="false"
      @delete="reject"
    >
      <template #actions="{ id }">
        <el-button @click="approve(id)" type="success" circle>
          <CheckIcon />
        </el-button>
      </template>
    </EditableList>
  </div>
</template>
