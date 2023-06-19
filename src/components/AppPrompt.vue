<script>
// import axios from 'axios';
import {watchEffect} from 'vue';
// import {convertJsonToCsv} from '../utils/parselog'

import {testlogs} from '../components/graphqlex/logdata';



export default {
  data() {
    return {
      jsonData: testlogs,
      ResultSummaryData: {},
      showResultSummary: false,
      pageSize: 10, // Number of logs to display per page
      currentPage: 1, // Current page number
    };
  },
  mounted() {
    // this.parseJSON();
    this.toggleResultSummary();
    this.changePage();
  },
  methods: {
    parseJSON(ResultSummaryData) {
      watchEffect(() => {console.log('resultSums', ResultSummaryData)})
      return JSON.parse(ResultSummaryData);
    },
    toggleResultSummary() {
      this.showResultSummary = !this.showResultSummary;
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

<div>
  <main>
    <ul>
      <div v-for="(log, index) in jsonData" :key="index">
        <li>ID: {{ log.ID }}</li>
        <li>OPId: {{ log.OPId }}</li>
        <li>TestFlow: {{ log.TestFlow }}</li>
        <li>DutDevice_ID: {{ log.DutDevice_ID }}</li>
        <li>Mac_ID: {{ log.Mac_ID }}</li>
        <li>ResultStatus_ID: {{ log.ResultStatus_ID }}</li>
        <tr>
          <h2 @click="toggleResultSummary">ResultSummary:</h2>
        </tr>
        <ul v-if="showResultSummary">
          <!-- parseJSON(log.ResultSummary) -->
          <table>
            <tr v-for="(keys, value) in parseJSON(log.ResultSummary) " v-bind:key="keys">
            <td>{{ value  }}</td>
            <td>{{ keys }}  </td>
            </tr>
          </table>
          
        </ul>
        <li>Path: {{ log.Path }}</li>
        <li>CreatedTime: {{ log.CreatedTime }}</li>
        <p>===========================================</p>
      </div>
    </ul>
  </main>
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

main {
  margin: 0 auto;
  max-width: 1000px;
  padding: 1em;
}
main p {
  padding-top: 0.5em;
}
main h2{
  background-color: #99D3Df;
  padding: 0.5em 2.5em;
  text-align: center;
  font-size: 1.2em;
}
table {
  margin-top: 0.5em;
  width: 100%;
}
td, th {
  border: 1px solid #88BBD6;
  padding: 0.3rem 0.8rem;
  overflow: hidden;
}

.result_summary
{
  display: flex;
flex-wrap: wrap;
max-height: 500px; /* Set a maximum height to enable scrolling */
  overflow: auto; /* Enable scrolling when there are many elements */
}
.pack {
  display: none; /* Hide the items when packed */
}


button, input[type="submit"] {
  background-color: #99D3Df;
  padding: 0.5em 2.5em;
  text-align: center;
  font-size: 1.2em;
  border-radius: 4px;
  border: 1px solid black;
}

</style>