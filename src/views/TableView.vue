<script setup>
import {QueryWifiMac, QueryBTMac, QueryTestConfiguration} from '../components/graphqlex/gqlapis'
import {ref, computed, watchEffect} from 'vue'
import { useQuery } from '@vue/apollo-composable'
import AppContent from '@/components/AppContent.vue'
import gql from 'graphql-tag';


const UserInput = `{
    "input": {
        "lotcode": "PD1524MB0219"
    }
}`

// const {loading, result, error} = useQuery(QueryTestConfiguration, UserInput)
const {loading, result, error} = useQuery(QueryBTMac)
const addresses = computed(() => result.value?.QueryMacAddress)
watchEffect(() => {
  console.log('mac', addresses);
})

</script>

<template>
  <!-- <AppContent></AppContent> -->
    <main>
        <h1> Tables</h1>
        <table class="table-borard">
            <tr>
                <th scope="col">#</th>
                <th scope="col">MacAddrees</th>
            </tr>
            <!-- <AddNewUser v-on:createUser="createNewUser"></AddNewUser> -->
            
            <div v-if="loading">Loading...</div>
            <div v-if="error"> error occur {{ error.message }}</div>
            <!-- <ul v-if=" addresses.length > 0"> -->
            <!-- <li v-for="mac in addresses" v-bind:key="mac.Address">BT_Macaddress => {{ mac.Address }}</li> -->
            <tr v-for="(mac, index) in addresses" v-bind:key="mac.Address">
                <th scope="row">  {{ index + 1}}  </th>
                <td>  {{ mac.Address.toLowerCase() }}</td>
            </tr>
            <!-- </ul> -->
            <!-- <div v-else>No addresses found</div> -->
            
            
            <!-- <ListUsers v-bind:users="users" v-on:deleteUser="deleteUser" v-on:updateUser="updateUser"></ListUsers> -->
        </table>
    </main>
</template>





<style>
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