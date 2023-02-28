<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div id="test"></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { getSongData } from './services/api/genius.js';

// console.log(getSongData()['response']["song"]["artist_names"]);

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}


fetch("https://api.genius.com/songs/378195",     {
                method: "POST", // or GET, PUT, DELETE, etc.
                headers: {
                "Content-Type": "application/json", // to have JSON content in body
                "Authorization": "Bearer 244hhZKpjMZHvR0bEmEpzluRNx8tyOo6oc910YDzgi3LY5-I4-UoAdj5xn3oLL6u" // set JWT token
            },})
    .then((response) => {
        if(!response.ok){ // Before parsing (i.e. decoding) the JSON data,
                            // check for any errors.
            // In case of an error, throw.
            throw new Error("Something went wrong!");
        }
        //console.log(response.json());
        return response.json(); // Parse the JSON data.
    })
    .then((data) => {
        console.log(data);
    })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
