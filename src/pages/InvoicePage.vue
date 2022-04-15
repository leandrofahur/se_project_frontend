<template>
  <NavbarComponent />

  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "InvoicePage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
