<script>
// import axios from 'axios';
// import {watchEffect} from 'vue';
// import {convertJsonToCsv} from '../utils/parselog'
import {logdata} from '../components/graphqlex'

export default {
  data() {
    return {jsonData: logdata,
      csvString: '',
      beautifiedData: '',
      paraData: {},
      ResultSummary: ''

    };
  },
  mounted() {
    // this.csvString = convertJsonToCsv(this.jsonData);
    this.beautifyJson();
  },
  methods: {
    beautifyJson() {
      this.beautifiedData = JSON.stringify(this.jsonData, null, 2).replace(/\\/g, '');
      
    }
  },
  computed:{
    formatJson(){
      try {
        const paraData = JSON.parse(this.beautifiedData)
        if (paraData.ResultSummary){
          paraData.ResultSummary = JSON.parse(paraData.ResultSummary);
        }
        return JSON.stringify(paraData, null, 2)
      } catch (error) {
        console.error('Invaild JSONUUU', error);
        return '';
      }
    }
  },
};

</script>


<template>
  <!-- <pre>{{ beautifiedData }}</pre> -->
  <div>
    <div v-for ="jstr in beautifiedData.ResultSummary" :key="jstr.Result">
      <p>Resultsss: {{ jstr }}</p>
      <pre> {{ beautifyJson(jstr.ResultSummary) }}</pre>
    </div>
  </div>
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