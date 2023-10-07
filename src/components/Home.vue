<template>
  <div id="container-div" :style="cssProps">
    <div id="heading-div">
      <h3>Movement for sanity over vanity</h3>
      <h2>Trainer Marlowe</h2>
      <h2></h2>
    </div>
    <router-link style="text-decoration: none" to="/begin">
      <div id="beginTextDiv">
        <h1 v-el:begin class="begin" @click="handleBeginClick">Begin</h1>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      backgroundImage: `url(${require('../assets/sample-photo.jpg')})`
    }
  },
  methods: {
    handleBeginClick() {
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


html{
  overflow: auto;
}

#beginTextDiv {
  padding: 100px;
}
#container-div {
  background-color: #000000;
  background-size: 100%;
  height: 200vh;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/src/assets/sample-photo.jpg")
}

h1 {
  margin: 20vh 0 0;
  text-align: center;
  font-family: "Anton", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: -4px 4px #ef3550, -8px 8px #f48fb1;
  opacity: 0.6;
  text-decoration: none !important;
}

h1:hover {
  opacity: 1;
  cursor: pointer;
}


h2 {
  margin-top: 10%;
  color: #fff;
  font-size: 4vh;
  text-align: center;
  font-family: "KoHo", sans-serif;
}

h3 {
  font-size: 3vh;
  color: #f48fb1;
  text-shadow: 1pt #fff;
  text-align: center;
  font-family: "KoHo", sans-serif;
}

body {
  padding: 0;
  margin-top: 0;
  background-color: lightgrey;
}
</style>
