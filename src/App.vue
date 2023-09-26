<template>
  <Home msg="Hi!"/>
  <Login/>
</template>

<script>
import Home from './components/Home.vue'
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Home,
    Login,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  /* margin-top: 60px; */
}

body {
  background: black;
}
</style>
