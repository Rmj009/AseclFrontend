<script setup>
import gql from 'graphql-tag'
import {ref, computed, watchEffect} from 'vue'
import { useQuery } from '@vue/apollo-composable'
import AppContent from '@/components/AppContent.vue'



// const MacQueryInput = gql`
//     query {
//       QueryMacAddress(input: { macType: "BT" }) {
//         Address
//       }
//     }
// `
// const {loading, result} = useQuery(MacQueryInput)
// const addresses = computed(() => result.value?.QueryMacAddress ?? [])
// watchEffect(() => {
//   console.log('mac', result);
// })



</script>

<template>
  <AppContent>
    <!-- <h1> DISPLAY MACADDRESS</h1>
<ul>
  <li v-for="mac in address" :key="mac.Address">{{ mac.Address }}</li>
</ul>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div> -->
  </AppContent>
</template>
