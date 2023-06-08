<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useBannerStore } from '@/stores/banner'

// const store = useBannerStore()

// ----
// Data
// ----
const { bannerMessage, bannerType } = storeToRefs(useBannerStore())
const { setBannerData } = useBannerStore()

// -------------------
// Computed Properties
// -------------------
const bannerBackgroundColor = computed(() => {
  console.log("In bannerBackgroundColor()... bannerMessage: " + bannerMessage.value + ", bannerType: " + bannerType.value)
  
  if (bannerType.value === 'Error') {
    return 'red'
  } else if (bannerType.value === 'Success') {
    return 'green'
  } else {
    return 'blue'
  }
})

// -------
// Methods
// -------
const clearBannerMessage = () => {
  setBannerData('', 'Info')
}
const printBanner = () => {
  console.log("In printBanner()... bannerMessage: " + bannerMessage.value + ", bannerType: " + bannerType.value)
}
</script>

<template>
  <div v-show="bannerMessage" v-bind:style="{ 'background-color': bannerBackgroundColor }">
    <span id="errorMessageClear" v-on:click="clearBannerMessage">Clear</span>
    <p>{{ bannerMessage }}</p>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display:inline-block;
  margin-bottom: 15px;
}

span, p {
  padding: 15px;
  color: white;
  width: auto;
}

div {
  float: left;
}

#errorMessageClear {
  float: right;
}

#errorMessageClear:hover {
  color: black;
  cursor: pointer;
}
</style>
