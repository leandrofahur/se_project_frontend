
<template>
  <NavbarComponent />
  <HeroComponent filename="bannerProduct.png" />
    <div v-for="product in products" :key="product.id">
              <CartBoxComponent :product="product"/>
    </div>

  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
//import ProductDataService from "../services/ProductsDataService";
import CartBoxComponent from"../components/CartBoxComponent.vue";
import CartDataService from "../services/CartDataService";

export default {
  data(){
      return{
          id: null,
          products:null,
      }
  },
  name: "ProductPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    CartBoxComponent,
  },
   methods:{
      async getAllCartProduct(){
          //console.log("hello");
          CartDataService.getAll()
          .then((response)=>{
              this.products = response.data;
              //console.log(this.products);
            })
          .catch((err)=>(console.log(err)));                     
      },     
  },
 
  mounted(){
      this.getAllCartProduct();
      
  }
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
