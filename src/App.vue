<script setup lang="ts">
import {ref} from 'vue'
import { RouterView } from 'vue-router'

import SidebarMenu from '@/components/SidebarMenu.vue';

const headerTitle = ref("Vue Project (Dynamic)")

</script>

<template>
  <div id="root">
    <SidebarMenu class="sidebar" />
    <RouterView class="router-view" />
  </div>
  <!-- <div>
    <AppHeader v-bind:titles="headerTitle"></AppHeader>
    <RouterView />
  </div> -->
  
</template>

<style scoped lang="scss">
#root {
  display: grid;
  grid-template-areas: 'sidebar router-view';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}

.sidebar {
  grid-area: 'sidebar';
}

.router-view {
  grid-area: 'router-view';
  padding: 1rem;
}
</style>
