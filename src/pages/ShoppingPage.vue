<template>
  <NavbarComponent />
  <div class="container">
      <div>
          <div v-for="product in products" :key="product.id">
              <ProductBoxComponent :product="product"/>
          </div>
      </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import ProductDataService from "../services/ProductsDataService";
import ProductBoxComponent from "../components/ProductBoxComponent.vue";

export default {
  name: "ShoppingPage",
  data(){
      return{
          products: []
      }
  },
  components: {
    NavbarComponent,
    FooterComponent,
    ProductBoxComponent,
  },
  methods:{
      async getProducts(){
          ProductDataService.getAll()
          .then((response)=>{
              this.products = response.data;
              console.log(response.data);
            })
          .catch((err)=>(console.log(err))); 
      }
  },
  mounted(){
      this.getProducts();
  }
};
</script>

<style scoped>
h1 {
  color: #f9fbe7;
}

.mod {
  color: #f9fbe7;
  position: relative;
  top: -150px;
  text-align: center;
}
</style>
