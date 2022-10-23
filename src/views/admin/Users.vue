<script lang="ts">
import { defineComponent } from 'vue'
import { RestAPI } from '@aws-amplify/api-rest'
import { Auth } from '@aws-amplify/auth'
import CheckIcon from '~icons/mdi/check'
import EditableList from '@/components/EditableList.vue'
import type { Item } from '@/components/EditableList.vue'
import { confirmUser, removeUser } from '@/utils'
import AppSwal from '@/common/AppSwal'

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
    loading: true,
  }),
  async mounted() {
    this.users = await this.listUnconfirmedUsers()
    this.loading = false
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
    error(id: string) {
      AppSwal.fire(
        'Unexpected error, please, contact with administrator. Give him this code',
        id,
        'error'
      )
    },
    removeFromLocalList(username: string) {
      const userIdx = this.users.findIndex(user => user.id === username)

      if (userIdx === -1) {
        this.error(atob('user index not found'))

        throw new Error('User not found')
      }

      this.users.splice(userIdx, 1)
    },
    approve(user: string) {
      this.removeFromLocalList(user)
      confirmUser(user).catch(err => {
        this.error(
          btoa(
            'Cannot send approve request to db' + encodeURI(JSON.stringify(err))
          )
        )
      })
      console.log(`Approved: ${user}`)
    },
    reject(user: string) {
      this.removeFromLocalList(user)
      console.log(`Rejected: ${user}`)

      removeUser(user).catch(err => {
        console.error(err)

        this.error(
          btoa(
            'Cannot send remove request to db' + encodeURI(JSON.stringify(err))
          )
        )
      })
    },
  },
})
</script>

<template>
  <div v-if="loading" class="flex place-content-center">
    <CssLoader />
  </div>

  <div v-else>
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
