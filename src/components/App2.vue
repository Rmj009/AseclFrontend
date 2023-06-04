<script setup()> 
import {useQuery} from '@vue/apollo-composable';
import { computed } from '@vue/reactivity';
import gql from `graphql-tag`;
import { watchEffect } from 'vue';
///////////////////
import GraphQLComponent from '.components/GraphQLComponent.vue';
import { AllProductQuery } from '.components/AllProductQuery';
import { OtherQuery } from './OtherQuery';


const {result, error, loading} = useQuery(AllproductQuery);
const product = computed(() => result.value?.creatdTime ?? [])
export function useGraphQLQuery(query) {
  const { result, error, loading } = useQuery(query);

  const data = computed(() => result.value ?? []);
  watchEffect(()=>{
        console.log(product);
    });
  return {
    data,
    error,
    loading,
  };


}

// {/* <script>

// export default {
//   components: {
//     GraphQLComponent,
//   },
//   data() {
//     return {
//       allProductQuery: AllProductQuery,
//       otherQuery: OtherQuery,
//     };
//   },
// };
// </script> */}


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
<div>
    <GraphQLComponent :query="allProductQuery" />
    <GraphQLComponent :query="otherQuery" />
</div>
<ul>
    
    <li v-for="product in products" :key="products.id">{{products.id}}</li>
</ul>

</template>

<style>     </style>