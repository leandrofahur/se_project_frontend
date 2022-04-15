<template>
  <NavbarComponent />
  <div class="container justify-center">
    <div class="grid-container">
      <div v-for="product in products" :key="product.id">
        <CardComponent
          :productPic="product.productPic"
          :productName="product.name"
        />
      </div>
    </div>
    <a class="btn btn-primary m-3" href="/summary"> CHECKOUT </a>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import CartService from "../services/CartService";
import OrderService from "../services/OrderService";

export default {
  name: "CartPage",
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
  },
  data() {
    return {
      id: null,
      cart: null,
      products: null,
    };
  },
  methods: {
    async getAllCartProduct() {
      const responseCart = await CartService.getAll();
      const c = responseCart.data;
      this.cart = c;
      console.log(c);

      const p = [];
      for (let i = 0; i < c.length; i++) {
        let responseProduct = await OrderService.getProduct(c[i].productId);
        p.push(responseProduct.data);
      }
      this.products = p;
      console.log(p);
    },
  },
  mounted() {
    this.getAllCartProduct();
  },
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
