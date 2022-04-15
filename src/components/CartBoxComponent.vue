<template>
    
    <div class="card w-100 h-100">
        
        <p>qty: {{product.quantity}}</p>        
        <div v-if="info!==null">
            <p>{{info.name}}</p>
        </div>
         <div v-if="info!==null">
            <p>{{info.description}}</p>
        </div>  
         <div v-if="info!==null">
            <img :src="require(`@/assets/images/${info.imgDir}`)" />
        </div>               
    </div>
    
</template>
<script>

import ProductDataService from "../services/ProductsDataService";

export default({
    data(){
      return{          
          info:null,          
      }
  },
  methods:{
      async getProduct(){
          console.log(this.product.id);
          ProductDataService.get(this.product.productId)
          .then((response)=>{
              this.info = response.data;
              console.log(response.data);
            })
          .catch((err)=>(console.log(err))); 
      },      
  },
    name: "CartBoxComponent",
    props: ["product"],
    mounted(){
      //console.log(this.product.imgDir);
      this.getProduct();
  }
})
</script>
<style scoped>
    .card-img-top{
        object-fit: cover;
    }
</style>