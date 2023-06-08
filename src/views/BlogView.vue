<script setup>
import BlogEntries from '@/components/BlogEntries.vue'
// import AppContent from '@/components/AppContent.vue'

</script>

<template>
  <BlogEntries>
    <h1> DISPLAY MACADDRESS</h1>
<ul>
  <li v-for="mac in address" :key="mac.Address">{{ mac.Address }}</li>
</ul>
</BlogEntries>>
</template>
