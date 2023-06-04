<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <!-- Render the other query data here -->
      </div>
    </div>
  </template>
  
<script>
import { OtherQuery } from './OtherQuery';
import { useGraphQLQuery } from './useGraphQLQuery';

export default {
setup() {
    const { data, error, loading } = useGraphQLQuery(OtherQuery);

    return {
    data,
    error,
    loading,
    };
},
};
</script>
  