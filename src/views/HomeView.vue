<script>
// import {ref, computed, watchEffect} from 'vue'
// import AppContent from '@/components/AppContent.vue'
export default{
  name: 'homepageComponent',
  data(){
    return {
      items:[
        {
          id: 1,
          name: 'ColumnName_A',
          options:[
          {id: 1, name: 'parseCol_1'},
          {id: 2, name: 'parseCol_2'},
          {id: 3, name: 'parseCol_3'},
          ],
        },
      ]
    }
  }
};
</script>

<template>
  <!-- <AppContent>
    
  </AppContent> -->
  <h1> Welcome Test-Logs dashboard </h1>
  
  <div>
    <div v-for="item in items" :key="item.id">
      <select v-model="selectedValues[item.id]">
        <option v-for="option in item.options" v-bind:key="option.id" :value="option.id">{{ option.name }}</option>
      </select>
    </div>
  </div>
  
<div>]
  <div v-for="item in items" v-bind:key="item.id">{{ selectedValues[item.id] }}</div>
</div>

</template>

