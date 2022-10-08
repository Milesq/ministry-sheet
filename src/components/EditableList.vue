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
    editable: {
      type: Boolean,
      default: true,
    },
    creatable: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    newItem: '',
  }),
  methods: {
    add() {
      this.$emit('add', this.newItem)
      this.newItem = ''
    },
  },
})
</script>

<template>
  <div>
    <template v-if="creatable">
      <el-input v-model="newItem" placeholder="Please input" />
      <el-button type="success" @click="add">Ok</el-button>
    </template>

    <div>
      <el-table :data="items">
        <el-table-column label="Name">
          <template v-slot="scope">
            <template v-if="editable">
              <EditableValue
                :value="scope.row.name"
                @update="$emit('update', scope.row.id, $event)"
              />
            </template>

            <span v-else>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="Operations">
          <template v-slot="scope">
            <div>
              <slot name="actions" :id="scope.row.id" />

              <el-button
                @click="$emit('delete', scope.row.id)"
                type="danger"
                circle
              >
                <DeleteIcon />
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
