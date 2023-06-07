<script lang="ts" setup>
// import TodoInput from "../components/TodoInput.vue"
// import TodoPrivateList from "../components/TodoPrivateList.vue"
// import TodoPublicList from "../components/TodoPublicList.vue"
// import OnlineUsers from "../components/OnlineUsers.vue"
// import insertProductFamilies from '../components/ProductFamily.vue'
import {ref, computed} from 'vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import { MacQueryInput } from '../graphql-operations/'

const Qvar = ref({ macType: "BT" })
const macaddr = useQuery(MacQueryInput, Qvar)
const result = useResult(macaddr.result, [], (data) => data?.Address)

const address = computed(() => result.value?.data?.QueryMacAddress.Address ?? '')

</script>

<route>
{
  meta: {
    requiresAuth: true
  }
}
</route>

<template>
    <div>
      <div v-if="result.loading">Loading...</div>
      <div v-else-if="result.error">Error: {{ result.error.message }}</div>
      <div v-else>
        <div>macaddress : {{ macaddr }}</div>
        <ul>
          <li v-for="macType in result.data?.QueryMacAddress.Address" :key="macType">
            <div>macaddress: {{ macType.BT }}</div>
          </li>
        </ul>
      </div>
    </div>
</template>
