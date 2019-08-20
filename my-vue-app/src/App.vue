<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p><router-link to="/articles/13">[記 事 No.13]</router-link></p>
    <router-view/>
    <hr />
    <router-view name="sub" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
