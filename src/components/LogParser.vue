<script>
// import axios from 'axios';
// import {ref, watchEffect} from 'vue';
// import {convertJsonToCsv} from '../utils/parselog'
import {logsPass} from '../components/graphqlex/logdata';

export default {
  data() {
    return {
      jsonData: logsPass,
      beautifiedData: '',
      ResultSummary: {},
      showResultSummary: false,
      pageSize: 10, // Number of logs to display per page
      currentPage: 1, // Current page number
    };
  },
  mounted() {
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
<!-- <pre>{{ beautifiedData }}</pre>
<pre> {{ResultSummary.No}} </pre> -->
<div>
  <main>
    <ul>
      <div v-for="(log, index) in jsonData" :key="index">
        <p>ID: {{ log.ID }}</p>
        <p>Dut_No: {{ log.Dut_No }}</p>
        <p>Result: {{ log.Result }}</p>
        <p>type: {{ log.type }}</p>
        <p>channel: {{ log.channel }}</p>
        <p>antenna: {{log.antenna}}</p>
        <p>bandwidth: {{log.bandwidth}}</p>
        <p>data_rate: {{log.data_rate}}</p>
        <p>Evm_Spec: {{log.Evm_Spec}}</p>
        <p>Evm_Avg_dB: {{log.Evm_Avg_dB}}</p>
        <p>Power_Spec: {{log.Power_Spec}}</p>
        <p>Power_Avg: {{log.Power_Avg}}</p>
        <p>Symbol_Clk_Err_ppm: {{log.Symbol_Clk_Err_ppm}}</p>
        <p>RX_PER: {{log.RX_PER}}</p>
        <p>TotalTestTime: {{log.TotalTestTime}}</p>
        <p>TwoD_Model: {{log.TwoD_Model}}</p>
        <p>HW_UUID: {{log.HW_UUID}}</p>
        <p>ERR_Message: {{log.ERR_Message}}</p>
        <p>Machine_Error_Code: {{log.Machine_Error_Code}}</p>
        <p>New_MacAddress: {{log.New_MacAddress}}</p>
        <p>PSKEY_Dev_Name: {{log.PSKEY_Dev_Name}}</p>
        <p>ResultSummary: {{log.ResultSummary}}</p>
        <p>CreatedTime: {{log.CreatedTime}}</p>
        <p>=================================</p>
      </div>
    </ul>
  </main>
</div>
<div>
    <button @click="changePage(1)">Next Page</button>
    <button @click="changePage(-1)">Previous Page</button>
</div>

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

  
</style>