<template>
  <NavbarComponent />
  <div class="container">
    <div class="flango">
      <ul class="list-group list-group-flush">
        <div v-for="product in products" :key="product.id">
          <li class="list-group-item flito">
            <div class="catupily">
              <img
                :src="require(`@/assets/images/products/${product.productPic}`)"
                class="card-img-top mt-3"
              />
              <p>{{ product.name }}</p>
            </div>
            <span class="badge bg-primary rounded-pill"
              >${{ product.price }}</span
            >
          </li>
        </div>
        <a class="btn btn-primary m-3" href="/invoice"> GENERATE INVOICE </a>
      </ul>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CartService from "../services/CartService";
import OrderService from "../services/OrderService";

export default {
  name: "SummaryPage",
  components: {
    NavbarComponent,
    FooterComponent,
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
img {
  width: 50px;
  height: 50px;
}

.flango {
  margin: 50px;
}

.flito {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catupily {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catupily p {
  margin: 10px 0 0 0;
}
</style>
