
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
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import ProductDataService from "../services/ProductsDataService";

export default {
  data(){
      return{
          id: null,
          product:null,
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
