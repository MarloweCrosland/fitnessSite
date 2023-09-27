<template>
  <router-link to="/login">
    <div id="loginTextDiv">
      <h1 v-el:login class="login" @click="handleLoginClick">Login</h1>
    </div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleLoginClick() {
      this.active = !this.active;
    },
  },
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loginTextDiv {
  padding: 100px;
}

h1 {
  text-decoration: none;
  margin: 40px 0 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: -4px 4px #ef3550, -8px 8px #f48fb1, -12px 12px #7e57c2,
    -16px 16px #2196f3, -20px 20px #26c6da, -24px 24px #43a047,
    -28px 28px #eeff41;
  opacity: 0.6;
}

h1:hover {
  opacity: 1;
  cursor: pointer;
}

body {
  background-color: lightgrey;
}
</style>
