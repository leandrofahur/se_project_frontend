<template>
  <NavbarComponent />
  <div class="container">
    <div class="grid-container">
      <div :key="product.id" v-for="product in products">
        <div v-if="product.isFavorite === true">
          <CardComponent
            :productPic="product.productPic"
            :productName="product.name"
          />
        </div>
      </div>
    </div>
  </div>

  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import OrderService from "../services/OrderService";

export default {
  name: "FavoritesPage",
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
  },
  data() {
    return {
      products: Array,
    };
  },
  mounted() {
    OrderService.getAllProducts()
      .then((response) => {
        const p = response.data;
        this.products = p;
        // console.log(this.products);
      })
      .catch((e) => console.error(e.message));
  },
  methods: {},
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
