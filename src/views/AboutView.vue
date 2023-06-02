<template>
  <main>
    <h2>About</h2>
    <p>This website was developed using the Vue framework.</p>
    <p>For details on how this webpage was developed, please check out the Vue Course on <a href="https://testdriven.io">testdriven.io</a>!</p>
    <p>The source code for this webpage is available on <a href="https://gitlab.com/patkennedy79/vue-crud-course-code">GitLab</a>.</p>
    <div>
    <input v-model="name" type="text" placeholder="Enter name">
    <button @click="executeQuery">Execute Query</button>
  </div>
  
  
  </main>
</template>


<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    executeQuery() {
      const sqlStatement = 'SELECT * FROM users WHERE name = ?';
      const data = {
        name: this.name,
        sql: sqlStatement,
      };

      fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(result => {
          console.log(result); // Process the query result as needed
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>



<style scoped>
main {
  margin: 1.5em;
  padding: 1em 2em;
  color: black;
  background: #CDCDCD;
}

h2 {
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
}

p {
  padding: 10px 0;
  font-size: 1.2em;
}
</style>
