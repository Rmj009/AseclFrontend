<template>
    <div>
      <div v-for="item in items" :key="item.id">
        <select v-model="selectedValues[item.id]">
          <option v-for="option in item.options" :key="option.id" :value="option.id">{{ option.name }}</option>
        </select>
      </div>
  
      <div>
        <label v-for="item in items" :key="item.id">
          <input type="checkbox" v-model="activeFilters[item.id]"> {{ item.name }}
        </label>
      </div>
  
      <div>
        <div v-for="item in items" :key="item.id">
          {{ selectedValues[item.id] }}
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Item 1',
            options: [
              { id: 1, name: 'Option 1' },
              { id: 2, name: 'Option 2' },
              { id: 3, name: 'Option 3' },
            ],
          },
          {
            id: 2,
            name: 'Item 2',
            options: [
              { id: 4, name: 'Option 4' },
              { id: 5, name: 'Option 5' },
              { id: 6, name: 'Option 6' },
            ],
          },
        ],
        selectedValues: {},
        activeFilters: {},
      };
    },
  };
  </script>
  