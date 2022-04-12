<template>
  <NavbarComponent />
  <div class="container">
    <HeroComponent filename="homepage.png" />
    <div class="row mod">
      <div class="col"><h1>SIGNATURE MODEL - Black</h1></div>
      <div class="col">
        <button type="button" class="btn btn-outline-light p-3">
          PLACE YOUR ORDER
          <img src="../assets/icons/arrow-right.svg" class="ms-3" />
        </button>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";

export default {
  name: "HomePage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
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
