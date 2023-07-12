<script setup lang="ts">

// import {axios} from 'axios'
import { ref } from 'vue'

const drawer = ref(false)
const apiKey = '6bd6c9a75fdb47b888def4eaec38d6c2'
const title = ref(["titlees"])
const articles = ref([])
const errors = ref([])
// const setResource = (source: string) => {
//   axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`)
//     .then(response => {
//       articles.value = response.data.articles
//       console.log(response.data)
//     })
//     .catch(e => {
//       errors.value.push(e)
//     })
// }

</script>

<template>
    <main>
      <!-- <SideMenu :drawer="drawer"  :worklog="worklog" @selectsource="setResource" ></SideMenu> -->
      <h1>{{ title }}</h1>
    </main>
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 1000px;
  padding: 1em;
}
main h1 {
  padding-top: 0.5em;
}

</style>
