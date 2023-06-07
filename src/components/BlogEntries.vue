<script setup>
import gql from 'graphql-tag'
import {ref, computed, watchEffect} from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { axios } from 'axios';
// ----
// Data
// ----
const MacQueryInput = gql`
    query {
      QueryMacAddress(input: { macType: "BT" }) {
        Address
      }
    }
`
const fetchData = async () => {
  try {
    const response = await axios.get(urls, {
      params: {
        query: MacQueryInput,
      },
    })
    
    if (response.data && response.data.data) {
      console.log(response.data.data.QueryMacAddress.Address)
    }
  } catch (error) {
    console.error(error)
  }
}

watchEffect(() => {
  fetchData()
})
</script>

<template>
    <main>
        <div v-for="addr in macEntries" v-bind:key="addr.index" class="blog-card">
            <h2>MAC ADDRESS</h2>
            <p>{{ addr.Address }}</p>
            <p class="blog-entry-date">{{ addr.Address }}</p>
        </div>
    </main>
</template>

<style scoped>
main {
  margin: 1.5em;
  padding: 0 2em;
  color: black;
  background: #CDCDCD;
}

.blog-card {
  padding: 1em 0;
}

h2 {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
}

p {
  padding: 10px 0;
  font-size: 1.2em;
}

.blog-entry-date {
  font-size: 0.7em;
  font-style: italic;
}
</style>
