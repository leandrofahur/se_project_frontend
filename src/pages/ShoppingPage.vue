<template>
  <NavbarComponent />
  <HeroComponent filename="heroOrder.png" />
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";

export default {
  name: "ShoppingPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
};
</script>

<style scoped></style>
