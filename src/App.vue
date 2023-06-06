<script setup lang="ts">
// <script setup>
// import NavBar from "./components/NavBar.vue"
import {ref} from 'vue'
import AppHeader from './components/AppHeader.vue'
const headerTitle = ref("Vue Project (Dynamic)")
//------------------------------------------------
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import {SoftwareQueryInput} from './graphql-operations'

// ---------------
// Lifecycle Hooks
// ---------------
// onBeforeMount(() => {
//   console.log('App.vue: onBeforeMount() called!')
// })
// onMounted(() => {
//   console.log('App.vue: onMounted() called!')
// })
// onBeforeUnmount(() => {
//   console.log('App.vue: onBeforeUnmount() called!')
// })
// onUnmounted(() => {
//   console.log('App.vue: onUnmounted() called!')
// })
export default {
    setup () {
        const variables = ref({ Name: 'abc-abc-abc' })
        const { result } = useQuery(SoftwareQueryInput, variables)

        const software = computed(() => result.value?.data?.QuerySoftware.Name ?? '')
        function selectUser (id) {
            variables.value = { id, }
        }
        return { result, software }
    },
}
</script>



<template>
    <AppHeader v-bind:title="headerTitle"></AppHeader>
    <RouterView />
    <div>
      <div v-if="result.loading">Loading...</div>
      <div v-else-if="result.error">Error: {{ result.error.message }}</div>
      <div v-else>
        <div>Software Name: {{ software }}</div>
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
    </div>
    <!-- <router-view /> -->
</template>



