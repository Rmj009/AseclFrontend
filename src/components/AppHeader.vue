<script setup>
import { RouterLink } from 'vue-router'
import { defineProps, watchEffect } from 'vue';


const titles = defineProps({
  titles: {type: String, required: true}
})
watchEffect(() => {
  console.log('title', titles);
})
</script>

<template>
    <header>
        <div>
            <h1>{{ titles }}</h1>
        </div>
        <nav>
            <ul>
                <li><RouterLink to="/">HOME</RouterLink></li>
                <li><RouterLink to="/CRUD">CRUD</RouterLink></li>
                <li><RouterLink to="/Prompt">Test Logs</RouterLink></li>
                <li><RouterLink to="/TablesView">GrphqlTable</RouterLink></li>
                <!-- <li><RouterLink to="/product_TestConfiguration">產品TestConfiguration表</RouterLink></li> -->
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
  margin: auto;
  padding: 20px;
  background-color: #88BBD6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
  
header .title {
  font-size: 1.0em;
  margin: auto;
}
  
nav {
  margin: auto;
}
  
nav ul {
  list-style: none;
}
  
nav li {
  display: inline-block;
  padding-left: 1em;
  font-size: 1.5em;
}

nav li a {
  text-decoration: none;
}

nav li a:visited {
  color: black;
}

nav li a.router-link-exact-active {
  position: relative;
}

nav li a.router-link-exact-active:after {
  position: absolute;
  content: '';
  height: 3px;
  left: 0;
  bottom: -10px;
  background: white;
  width: 100%;
}

@media screen and (max-width: 700px) {
  header {
    flex-direction: column;
  }
  header .title {
    padding-bottom: 0.5em;
  }  
}
</style>
