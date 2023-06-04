<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
/////////////////////////////
// import GraphQLComponent from '.components/GraphQLComponent.vue';
// import { AllProductQuery } from '.components/AllProductQuery';
// import { OtherQuery } from './OtherQuery';
///////////////////////////////
const headerTitle = ref("Vue Project (Dynamic)")

// ---------------
// Lifecycle Hooks
// https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
// ---------------
onBeforeMount(() => {
  console.log('App.vue: onBeforeMount() called!')
})
onMounted(() => {
  console.log('App.vue: onMounted() called!')
})
onBeforeUpdate(() => {
  console.log('App.vue: onBeforeUpdate() called!')
})
onUpdated(() => {
  console.log('App.vue: onUpdated() called!')
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
    <AppFooter>
        <template v-slot:message>DeFooter VuePage</template>
        <template v-slot:link><a href="https://testdriven.io">TestDriven.io</a></template>
    </AppFooter>
</template>
