<script>
// import axios from 'axios';
// import {watchEffect} from 'vue';
import {convertJsonToCsv} from '../utils/parselog'

export default {
  data() {
    return {
      jsonData: [
      {"ID":19,"OPId":"F8944","TestFlow":"FT","DutDevice_ID":2,"Mac_ID":12001,"ResultStatus_ID":1}
    ],
      csvString: ''
    };
  },
  mounted() {
    this.csvString = convertJsonToCsv(this.jsonData);
  }
};

</script>


<template>
  <div>
    <pre>{{ csvString }}</pre>
  </div>
      <!-- <div>
    <ul>
      <li v-for="log in logs" :key="log.ID"> -->
        <!-- <p>ID: {{ log.ID }}</p>
        <p>OPId: {{ log.OPId }}</p>
        <p>TestFlow: {{ log.TestFlow }}</p> -->
        <!-- Display other log properties as needed -->
      <!-- </li>
    </ul>
  </div> -->
</template>


<style>
</style>