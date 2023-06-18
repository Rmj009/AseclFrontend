<script>
// import axios from 'axios';
import {ref, watchEffect} from 'vue';
// import {convertJsonToCsv} from '../utils/parselog'
// import {logdata} from '../components/graphqlex'

import {testlogs} from './logdata.js';



export default {
  data() {
    return {
      jsonData: testlogs,
      beautifiedData: '',
      paraData: '',
      ResultSummary: {},
      pageSize: 10, // Number of logs to display per page
      currentPage: 1, // Current page number
    };
  },
  mounted() {
    this.beautifyJson();
    this.parseResultSummary();
  },
  computed: {
    displayedLogs() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.testlogs.slice(startIndex, endIndex);
    },
    offset() {
      return (this.currentPage - 1) * this.pageSize;
    },
  },
  methods: {
    parseResultSummary(resultSummary) {
      return JSON.parse(resultSummary);
    },
    changePage(page) {
      this.currentPage += page;
    },
    // beautifyJson() {
    //   this.beautifiedData = JSON.stringify(this.jsonData, null, 2).replace(/\\/g, '');
    // },
  },
};

</script>


<template>
<!-- <pre>{{ beautifiedData }}</pre>
<pre> {{ResultSummary.No}} </pre> -->
<div>
    <ul>
      <li v-for="(log, index) in jsonData" :key="index">
        <p>ID: {{ log.ID }}</p>
        <p>OPId: {{ log.OPId }}</p>
        <p>TestFlow: {{ log.TestFlow }}</p>
        <p>DutDevice_ID: {{ log.DutDevice_ID }}</p>
        <p>Mac_ID: {{ log.Mac_ID }}</p>
        <p>ResultStatus_ID: {{ log.ResultStatus_ID }}</p>
        <p>ResultSummary:</p>
        <ul>
          <li v-for="(item, key) in parseResultSummary(log.ResultSummary)" :key="key">
            {{ key }}: {{ item }}
          </li>
        </ul>
        <p>CreatedTime: {{ log.CreatedTime }}</p>
      </li>
    </ul>
</div>
<div>
    <button @click="changePage(1)">Next Page</button>
    <button @click="changePage(-1)">Previous Page</button>
</div>
<!--   <div>
    <div v-for ="jstr in beautifiedData.ResultSummary" :key="jstr.Result">
      <p>Resultsss: {{ jstr }}</p>
      <pre> {{ beautifyJson(jstr.ResultSummary) }}</pre>
    </div>
  </div> -->
    <!-- <ul>
      <li v-for="log in logs" :key="log.ID"> -->
        <!-- <p>ID: {{ log.ID }}</p> -->
        <!-- <p>OPId: {{ log.OPId }}</p> -->
        <!-- <p>TestFlow: {{ log.TestFlow }}</p> -->
        <!-- Display other log properties as needed -->
      <!-- </li>
    </ul>
  </div> -->
</template>


<style>
</style>