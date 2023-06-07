<script setup lang="ts">
import {ref, computed, watchEffect} from 'vue'
import AppHeader from './components/AppHeader.vue'
import { useQuery, useResult } from '@vue/apollo-composable'
import {SoftwareQueryInput} from './graphql-operations'


//------------------------------------------------

const headerTitle = ref("Vue Project (Dynamic)")
// const Qvar = ref({ Input: NaN })
// const softwares = useQuery(SoftwareQueryInput, Qvar)
// const result = useResult(softwares.result, [], (data) => data?.todos)

// const soft = computed(() => result.value?.data?.QuerySoftware.Name ?? '')
watchEffect(()=>{
      console.log(headerTitle)
    });
</script>



<template>
    <AppHeader v-bind:title="headerTitle"></AppHeader>
    <RouterView />
    <h1>asdfadsfasdfad</h1>
    
    <!-- <div>
      <div v-if="result.loading">Loading...</div>
      <div v-else-if="result.error">Error: {{ result.error.message }}</div>
      <div v-else>
        <div>Software Name: {{ softwares }}</div>
        <ul>
          <li v-for="version in result.data?.QuerySoftware.Versions" :key="version.ID">
            <div>Version ID: {{ version.ID }}</div>
            <div>Version: {{ version.Version }}</div>
            <div>Created Time: {{ version.CreatedTime }}</div>
            <div>Created Owner ID: {{ version.CreatedOwner.ID }}</div>
            <div>Created Owner Employee ID: {{ version.CreatedOwner.EmployeeID }}</div>
          </li>
        </ul>
      </div>
    </div> -->
    <!-- <router-view /> -->
</template>



