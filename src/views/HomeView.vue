<script setup>
import gql from 'graphql-tag'
import {ref, computed, watchEffect} from 'vue'
import { useQuery } from '@vue/apollo-composable'
import AppContent from '@/components/AppContent.vue'



const MacQueryInput = gql`
    query {
      QueryMacAddress(input: { macType: "BT" }) {
        Address
      }
    }
`
const {macaddr} = useQuery(MacQueryInput);
console.log({macaddr})
const addresses = computed(() => macaddr.value.data?.Address ?? [])
watchEffect(() => {
  console.log('mac', addresses);
})



</script>

<template>
  <AppContent>
    <h1> DISPLAY MACADDRESS</h1>
<ul>
  <li v-for="mac in address" :key="mac.Address">{{ mac.Address }}</li>
</ul>
  </AppContent>
</template>
