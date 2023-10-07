<template>
  <h1>About You:</h1>
  <div id="contact-info">
    <div class="input-fields">
      <input id="name" v-model="name" placeholder="name" />
      <br />
      <input id="email" v-model="email" placeholder="email" />
      <br />
      <input id="phone" v-model="phone" placeholder="phone" />
    </div>
  </div>
  <div id="goals-info">
    <h1>Your goals:</h1>
    <h3>(Select 2)</h3>
    <div id="buttons-div">
      <button>Lose Weight</button>
      <button>Gain Muscle</button>
      <button>Increase Energy</button>
      <button>Improve Mental Health</button>
      <button>General Wellness</button>
      <button>Lose Weight</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "logIn",
};
</script>

<style scoped>
.input-fields {
  margin-top: 2vh;
  padding: 20px;
  text-align: center;
}

input {
  width: 20vw;
}

h1 {
  margin: 10vh 0 0;
  text-align: center;
  font-family: "Anton", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: #fff;
  text-shadow: -4px 4px #ef3550, -8px 8px #f48fb1;
  text-decoration: none !important;
}

h2 {
  color: #fff;
  font-size: 4vh;
  text-align: center;
  font-family: "KoHo", sans-serif;
  margin-bottom: 0;
  padding-bottom: 0;
}

h3 {
  font-size: 3vh;
  color: #f48fb1;
  text-shadow: 1pt #fff;
  text-align: center;
  font-family: "KoHo", sans-serif;
}

#buttons-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

button {
  border-radius: 3%;
  width: 30vw;
  padding: 5px;
  opacity: 0.8;
  background-color: #f48fb1;
  border-color: #fff;
  margin: 0.5vh;
  box-shadow: none;
  color: #fff;
  font-family: "KoHo", sans-serif bold;
}

button:hover {
  opacity: 1;
}
</style>
