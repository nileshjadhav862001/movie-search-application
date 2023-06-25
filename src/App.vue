<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!-- <LoginPage/> -->
    <!-- <homePage /> -->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import LoginPage from './components/LoginPage.vue';
// import HomePage from "./components/HomePage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // LoginPage,
    // HomePage,
  },
};
</script>

<style>
body {
  height: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
