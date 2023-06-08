<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
// import AppFooter from '@/components/AppFooter.vue'

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
    <AppHeader v-bind:title="headerTitle"></AppHeader>
    <RouterView />
    <!-- <AppFooter>
        <template v-slot:message>Editable VuePage</template>
        <template v-slot:link><a href="https://testdriven.io">TestDriven.io</a></template>
    </AppFooter> -->
</template>
