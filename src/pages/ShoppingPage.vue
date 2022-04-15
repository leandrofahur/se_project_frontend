<template>
  <NavbarComponent />
  <HeroComponent filename="hero04.png" />
  <div class="container">
    <div class="row">
      <FilterComponent @filters-selected="catchFilterOptions" />
      <div class="col-8">
        <h1 class="text-center" style="margin: 100px 0 0 0">Products</h1>
        <div
          v-if="
            isRange01 === false && isRange02 === false && isRange03 === false
          "
        >
          <div class="grid-container">
            <div :key="product.id" v-for="product in products">
              <CardComponent
                :id="products.id"
                :productPic="product.productPic"
                :productName="product.name"
                @set-favorite-flag="setFavoriteFlag(product)"
                @set-cart-flag="addProductToCart(product)"
              />
              <a :href="'/product/' + product.id">Details</a>
            </div>
          </div>
        </div>
        <div
          v-if="
            isRange01 === true && isRange02 === false && isRange03 === false
          "
        >
          <div class="grid-container">
            <div :key="product.id" v-for="product in products">
              <div v-if="product.price <= 150 && product.price >= 50">
                <CardComponent
                  :productPic="product.productPic"
                  :productName="product.name"
                  @set-favorite-flag="setFavoriteFlag(product)"
                  @set-cart-flag="addProductToCart(product)"
                />
                <a :href="'/product/' + product.id">Details</a>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="
            isRange01 === false && isRange02 === true && isRange03 === false
          "
        >
          <div class="grid-container">
            <div :key="product.id" v-for="product in products">
              <div v-if="product.price > 150 && product.price <= 250">
                <CardComponent
                  :productPic="product.productPic"
                  :productName="product.name"
                  @set-favorite-flag="setFavoriteFlag(product)"
                  @set-cart-flag="addProductToCart(product)"
                />
                <a :href="'/product/' + product.id">Details</a>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="
            isRange01 === false && isRange02 === false && isRange03 === true
          "
        >
          <div class="grid-container">
            <div :key="product.id" v-for="product in products">
              <div v-if="product.price > 250">
                <CardComponent
                  :productPic="product.productPic"
                  :productName="product.name"
                  @set-favorite-flag="setFavoriteFlag(product)"
                  @set-cart-flag="addProductToCart(product)"
                />
                <a :href="'/product/' + product.id">Details</a>
              </div>
            </div>
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
import CartService from "../services/CartService";

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
      cart: Object,
      isAll: true,
      isWomen: Boolean,
      isMen: Boolean,
      isRange01: false,
      isRange02: false,
      isRange03: false,
      id: null,
      qty: 1,
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
  methods: {
    catchFilterOptions(selected) {
      this.isAll = selected.isSelectedFilter[0];
      this.isWomen = selected.isSelectedFilter[1];
      this.isMen = selected.isSelectedFilter[2];
      this.isRange01 = selected.isSelectedPrice[0];
      this.isRange02 = selected.isSelectedPrice[1];
      this.isRange03 = selected.isSelectedPrice[2];
    },
    setFavoriteFlag(product) {
      if (product.isFavorite === false) {
        product.isFavorite = true;
      } else {
        product.isFavorite = false;
      }
      OrderService.putProduct(product.id, product);
    },
    addProductToCart(product) {
      CartService.post(1, product.id, this.qty);
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
