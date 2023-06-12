<script setup>
import { ref, computed, watchEffect, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
// import ListUsers from './ListUsers.vue'
// import AddNewUser from './AddNewUser.vue'
import Banner from './Banner.vue'
import axios from 'axios'
import gql from 'graphql-tag'
import { useBannerStore } from '@/stores/banner'
import { useQuery } from '@vue/apollo-composable'
import EditUserModal from './EditUserModal.vue'

const store = useBannerStore()

// ----
// Data
// ----
const title = ref('List of items:')
const mmaaddr = ref("")
// Each user object should contain the following fields:
//  * id: integer,
//  * name: string
//  * username: string
//  * email: string
const users = ref([])

// Largest index of the users array to use when adding a new user
const largestUserIndex = ref(0)

// -------
// Methods
// -------

// ---------------
// Lifecycle Hooks
// ---------------



onBeforeMount(() => {
  console.log('AppContent.vue: onBeforeMount() called!')
})
// onMounted(async () => {
//   console.log('AppContent.vue: onMounted() called!')

//   // GET request for user data
//   axios.get('http://192.168.1.230/simdc_project/graphql', {
//       params: {
//         query: MacQueryInput,
//         variables: null
//       },})
//     .then((response) => {
//       // handle success
//       store.setBannerData('SUCCESS! Loaded user data!', 'Success')
//       console.log('Received response.data:')
//       console.log(response.data)

//       users.value = response.data

//       // Save the length of the users array
//       largestUserIndex.value = users.value.length

//       console.log('Users array in success callback:')
//       console.log(users.value)
//     })
//     .catch((error) => {
//       // handle error
//       store.setBannerData('ERROR! Unable to load user data!', 'Error')
//     })
//     .finally((response) => {
//       // always executed
//       console.log('Finished!')
//     })
// })
onBeforeUnmount(() => {
  console.log('AppContent.vue: onBeforeUnmount() called!')
})
onUnmounted(() => {
  console.log('AppContent.vue: onUnmounted() called!')
})

</script>

<template>
    <main>
      <h1>{{ title }}</h1>
    </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 1000px;
  padding: 1em;
}
main h1 {
  padding-top: 0.5em;
}

</style>
