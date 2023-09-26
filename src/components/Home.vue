<template>
  <div class="loginDiv">

   <h1 v-el:login class="login" 
   @click="handleLoginClick"
   :style="{
     padding: active ? '0px' : '200px',
     }"
   >Login</h1>

   <!-- TODO: learn router

   <router-link to="/login">Login</router-link>
   <router-view></router-view> -->
  </div>

</template>
<script>
export default {
  data(){
    return {
      active: false,
    };
  },
  methods: {
    handleLoginClick(){
      this.active = !this.active
    },

  },
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: -4px 4px #ef3550,
               -8px 8px #f48fb1,
               -12px 12px #7e57c2,
               -16px 16px #2196f3,
               -20px 20px #26c6da,
               -24px 24px #43a047,
               -28px 28px #eeff41,
               -32px 32px #f9a825,
               -36px 36px #ff5722;
   opacity: 0.6;
}

h1:hover { 
  opacity: 1;
  cursor: pointer;
  }

  transformY {
    transform: translateY(200px);
  }

body {
  background-color: lightgrey;
}
</style>
