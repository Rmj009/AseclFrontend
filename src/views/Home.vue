<script setup lang="ts">
import {ref} from 'vue'
import AppHeader from '@/components/AppHeader.vue'

const headerTitle = ref("Vue Project (Dynamic)")

</script>

<template>
  <div>
    <AppHeader v-bind:titles="headerTitle"></AppHeader>
    <div class="content">
        <RouterView />
        <div class="wrapper">Home View</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
