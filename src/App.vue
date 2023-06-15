<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const headerTitle = ref("Vue Project (Dynamic)")

// ---------------
// Lifecycle Hooks
// ---------------
onBeforeMount(() => {
  console.log('App.vue: onBeforeMount() called!')
})
onMounted(() => {
  console.log('App.vue: onMounted() called!')
})
onBeforeUnmount(() => {
  console.log('App.vue: onBeforeUnmount() called!')
})
onUnmounted(() => {
  console.log('App.vue: onUnmounted() called!')
})
</script>

<template>
    <h1>homePage</h1>
    <AppHeader v-bind:titles="headerTitle"></AppHeader>
    <RouterView />
        <!-- <template v-slot:message>Editable VuePage</template>
        <template v-slot:link><a href="https://testdriven.io">TestDriven.io</a></template> -->
</template>
