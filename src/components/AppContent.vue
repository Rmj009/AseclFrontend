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
const title = ref('List of macAddrs:')
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

const MacQueryInput = gql`
query ($input: MacQueryInput) {
  QueryMacAddress(input: $input) {
    Address
  }
}
`
const UserInput = `{
  "input": {
    "macType": "BT"
  }
}`
const {loading, result, error} = useQuery(MacQueryInput, UserInput)
const addresses = computed(() => result.value?.QueryMacAddress)

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
watchEffect(() => {
  console.log('mac', addresses);
})
</script>

<template>
    <main>
      <h1>{{ title }}</h1>
      <table>
        <tr>
            <th>Index</th>
            <th>MacAddrees</th>

        </tr>
        <!-- <Banner>123123132123</Banner> -->
        <!-- <AddNewUser v-on:createUser="createNewUser"></AddNewUser> -->
        
        <div v-if="loading">Loading...</div>
        <div v-if="error"> error occur {{ error.message }}</div>
        <!-- <ul v-if=" addresses.length > 0"> -->
          <!-- <li v-for="mac in addresses" v-bind:key="mac.Address">BT_Macaddress => {{ mac.Address }}</li> -->
          <tr v-for="(mac, index) in addresses" v-bind:key="mac.Address">
            <td>  {{ index }}  </td>
            <td>  {{ mac.Address }}</td>
          </tr>
        <!-- </ul> -->
        <!-- <div v-else>No addresses found</div> -->
        
        
        <!-- <ListUsers v-bind:users="users" v-on:deleteUser="deleteUser" v-on:updateUser="updateUser"></ListUsers> -->
      </table>
      <EditUserModal v-if="showEditModal" v-on:cancelEdit="cancelEdit" ></EditUserModal>
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
table {
  margin-top: 0.5em;
  width: 100%;
}

td, th {
  border: 1px solid #88BBD6;
  padding: 0.3rem 0.8rem;
  overflow: hidden;
}

th {
  text-align: center;
  background-color: #88BBD6;
  color: black;
}
button, input[type="submit"] {
  background-color: #99D3Df;
  padding: 0.5em 2.5em;
  text-align: center;
  font-size: 1.2em;
  border-radius: 4px;
  border: 1px solid black;
}

button:hover, input[type="submit"]:hover {
  background-color: #88BBD6;
  cursor: pointer;
}
</style>
