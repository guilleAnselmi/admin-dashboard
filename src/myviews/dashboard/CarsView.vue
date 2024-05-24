<template>
  <DataTable :value="products" stripedRows  tableStyle="min-width: 50rem" :pt="datatableStyles">
    <Column
      v-for="col of columns"
      :key="col.field"
      :field="col.field"
      :header="col.header"
    ></Column>
  </DataTable>
</template>
<script setup>
import { useAuth0 } from '@auth0/auth0-vue'
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const datatableStyles = ref({
  // wrapper: 'rounded-lg'
})
const products = ref([])
const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
]
</script>
