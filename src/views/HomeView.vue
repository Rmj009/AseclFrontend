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
const variable = NaN
const macaddr = useQuery(MacQueryInput, variable);
// const address = computed(() => macaddr.value?.QueryMacAddress.Address ?? []);
watchEffect(() => {
  console.log('mac', macaddr);
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
