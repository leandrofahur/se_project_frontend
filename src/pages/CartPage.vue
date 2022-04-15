<template>
  <NavbarComponent />
  <div class="container">
    <div class="grid-container">
      <CardComponent
        :productPic="product.productPic"
        :productName="product.name"
      />
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CardComponent from "../components/CardComponent.vue";

export default {
  name: "FavoritesPage",
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
  },
  data() {
    return {
      cart: Object,
    };
  },
  mounted() {},
};
</script>

<style scoped>
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
