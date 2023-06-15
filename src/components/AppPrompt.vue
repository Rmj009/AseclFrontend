<script>
import axios from 'axios';
import {watchEffect} from 'vue';
export default{
data() {
    return {
      logs: [] // Initialize an empty array to store the logs
    };
  },
//   mounted() {
//     this.fetchLogs();
mounted() {
  this.fetchData();
  },
methods: {
  fetchData() {
    axios.get('http://192.168.1.68:3000/dashboard/api/logs/12001')
      .then(response => {
        const jsonData = response.data;
        watchEffect(() => {
          console.log('showJSON', jsonData);
        })
      })
      .catch(error => {
        console.error(error);
      });
  }
}
};

// const logs = JSON.parse('[{"ID":19,"OPId":"F8944","TestFlow":"FT",...}]');


</script>


<template>
      <div>
    <ul>
      <li v-for="log in logs" :key="log.ID">
        <p>ID: {{ log.ID }}</p>
        <p>OPId: {{ log.OPId }}</p>
        <p>TestFlow: {{ log.TestFlow }}</p>
        <!-- Display other log properties as needed -->
      </li>
    </ul>
  </div>
</template>


<style>
</style>