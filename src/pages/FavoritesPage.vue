<template>
  <NavbarComponent />
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "FavoritesPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
