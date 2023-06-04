<script setup()> 
import {useQuery} from '@vue/apollo-composable';
// import { computed } from '@vue/reactivity';
import gql from `graphql-tag`;
import { watchEffect, computed } from 'vue';


const AllproductQuery = gql`
    query allusers{
        products{
            id
            name
            creatdTime
        }
    }
`;

const {result, error, loading} = useQuery(AllproductQuery);
const product = computed(() => result.value?.creatdTime ?? [])

watchEffect(()=>{
        console.log(product);
});

// export default {
//   setup () {
//     const { result } = useQuery(gql`
//       query getUsers {
//         users {
//           id
//           firstname
//           lastname
//           email
//         }
//       }
//     `)
//   },
// }
</script>

<template>
<h1> example Apollo</h1>
<p v-if="error">{{ error }}</p>
<p v-if="loading">Loading ........>>>>>.....</p>
<ul>
    <li v-for="product in products" :key="products.id">{{products.id}}</li>
</ul>

</template>

<style>     </style>