<template>
  <NavbarComponent />
  <HeroComponent filename="hero04.png" />
  <div class="container">
    <div class="row">
      <FilterComponent @filters-selected="catchFilterOptions" />
      <div class="col-8">
        <h1 class="text-center" style="margin: 100px 0 0 0">Products</h1>
        <div class="grid-container">
          <div :key="product.id" v-for="product in products">
            <CardComponent
              :productPic="product.productPic"
              :productName="product.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import OrderService from "../services/OrderService";

export default {
  name: "ShoppingPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    FilterComponent,
    CardComponent,
  },
  data() {
    return {
      products: Array,
      categories: Array,
    };
  },
  mounted() {
    OrderService.getAllProducts()
      .then((response) => {
        const p = response.data;
        this.products = p;
        console.log(this.products);
      })
      .catch((e) => console.error(e.message));

    // OrderService.getAllCategories()
    //   .then((response) => {
    //     const p = response.data;
    //     this.categories = p;
    //     // console.log(this.categories);
    //   })
    //   .catch((e) => console.error(e.message));
  },
  methods: {
    catchFilterOptions(selected) {
      console.log(selected);
    },
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
