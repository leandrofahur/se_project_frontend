<template>
  <NavbarComponent />

  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "LoginPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style></style>
