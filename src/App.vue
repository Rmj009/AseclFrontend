<script setup>
import { h } from 'vue';
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'


const headerTitle = ref("Vue Project (Dynamic)")

// ---------------
// Lifecycle Hooks
// ---------------
onBeforeMount(() => {
  console.log('App.vue: onBeforeMount() called!')
})
onMounted(() => {
  console.log('App.vue: onMounted() called!')
})
onBeforeUnmount(() => {
  console.log('App.vue: onBeforeUnmount() called!')
})
onUnmounted(() => {
  console.log('App.vue: onUnmounted() called!')
})
</script>

<template>
  <RouterView />
  <h1> information </h1>
  <H2>
    {{ name }}
  </H2>
  <AppHeader v-bind:title="headerTitle"></AppHeader>
    <RouterView />
    <AppFooter>
        <template v-slot:message>Editable VuePage</template>
        <template v-slot:link><a href="https://testdriven.io">TestDriven.io</a></template>
    </AppFooter>
  <button @click="sayHello">SPEAKINFG</button>
</template>

<script>
        export default
        {
            name: 'Appppp',
            setup(){
              let name = "itself name"
              let age = 545
            
            function sayHello() {
              alert(`MY NAME IS ${name}, AGE IS ${age} `)
            }

            // return{
            //   name,
            //   age,
            //   sayHello
            // }
            return()=> h('H1', 說中文)
          }
        }
</script>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
#app {
  margin-top: 60px
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
