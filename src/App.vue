<template>
  <NavBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #fff;
  color: #333;
  line-height: 1.6;
}

#app {
}
</style>
