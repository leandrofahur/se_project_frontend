
<template>
  <NavbarComponent />
  <HeroComponent filename="bannerProduct.png" />
  <div class="container justify-content-center" v-if="product!==null">
    
    <h1>{{this.product.name}}</h1>
    <p>{{this.product.description}}</p>    
  </div>
  <div v-if="product!==null">
      <img :src="require(`@/assets/images/${product.imgDir}`)" />
  </div>
  <div v-if="product!==null">
    <button v-on:click="addToCart()">
      Add to cart
    </button>
    <input v-model="qty" type="number" min="1" max="500" step="1" name="qty">
  </div>    
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import ProductDataService from "../services/ProductsDataService";
import CartDataService from "../services/CartDataService";

export default {
  data(){
      return{
          id: null,
          product:null,
          qty: 1,
      }
  },
  name: "ProductPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
   methods:{
      async getProduct(){
          ProductDataService.get(this.id)
          .then((response)=>{
              this.product = response.data;
              console.log(response.data);
            })
          .catch((err)=>(console.log(err))); 
      },
      addToCart(){
        CartDataService.post(1,this.id,this.qty);
        //console.log("Hey");
      }
  },
  props: {
    filename: String,
  },
  mounted(){
      this.id = this.$route.params.id;
      this.getProduct();
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
