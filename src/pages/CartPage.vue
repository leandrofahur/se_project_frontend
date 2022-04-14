
<template>
  <NavbarComponent />
  <HeroComponent filename="bannerProduct.png" />


  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
//import ProductDataService from "../services/ProductsDataService";
//import CartDataService from "../services/CartDataService";

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
      
  },
 
  mounted(){
      
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
