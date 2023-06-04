<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <div v-for="product in data" :key="product.id">
          <h3>{{ product.name }}</h3>
          <p>{{ product.creatdTime }}</p>
        </div>
      </div>
    </div>
  </template>
  
<script>
import { AllProductQuery } from './AllProductQuery';
import { useGraphQLQuery } from './useGraphQLQuery';

export default {
setup() {
    const { data, error, loading } = useGraphQLQuery(AllProductQuery);

    return {
    data,
    error,
    loading,
    };
},
};
</script>
  