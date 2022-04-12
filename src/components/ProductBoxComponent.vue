<template>
    <router-link :to="{name:'ProductPage', params:{id: product.id}}">
        <div class="card w-100 h-100">
            <img :src="require(`@/assets/images/${product.imgDir}`)" class="card-img-top embed-responsive-item" />
            <h5>{{product.name}}</h5>
            <p>{{product.description}}</p>
        </div>
    </router-link>
</template>
<script>


export default({
    name: "ProductBoxComponent",
    props: ["product"],
})
</script>
<style scoped>
    .card-img-top{
        object-fit: cover;
    }
</style>