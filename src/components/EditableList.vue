<script lang="ts">
import { defineComponent } from 'vue'
import DeleteIcon from '~icons/mdi/delete'

import EditableValue from './EditableValue.vue'

export interface Item {
  id: string
  name: string
}

export default defineComponent({
  emits: ['add', 'update', 'delete'],
  components: {
    DeleteIcon,
    EditableValue,
  },
  props: {
    items: {
      type: Array as () => Item[],
      required: true,
    },
  },
  data: () => ({
    newItem: '',
  }),
})
</script>

<template>
  <div>
    <el-input v-model="newItem" placeholder="Please input" />
    <el-button type="success" @click="$emit('add', newItem)">Ok</el-button>

    <div>
      <el-table :data="items">
        <el-table-column label="Name">
          <template v-slot="scope">
            <EditableValue
              :value="scope.row.name"
              @update="$emit('update', scope.row.id, $event)"
            />
          </template>
        </el-table-column>

        <el-table-column label="Operations">
          <template v-slot="scope">
            <div @click="$emit('delete', scope.row.id)">
              <el-button type="danger" circle>
                <DeleteIcon />
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
