<script setup lang="ts">
// <script setup>
// import NavBar from "./components/NavBar.vue"
import {ref} from 'vue'
import AppHeader from './components/AppHeader.vue'
const headerTitle = ref("Vue Project (Dynamic)")

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

</script>

<template>
    <AppHeader v-bind:title="headerTitle"></AppHeader>
    <RouterView />
    <!-- <router-view /> -->
</template>
