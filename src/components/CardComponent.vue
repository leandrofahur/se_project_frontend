<template>
  <div
    class="card"
    style="width: 18rem; background: #1a1a1a; margin: 50px 0 0 0"
  >
    <img
      :src="require(`@/assets/images/products/${productPic}`)"
      class="card-img-top mt-3"
    />
    <div class="card-body">
      <h3 class="card-title text-center">{{ productName }}</h3>
      <div class="flex-ctrl">
        <button
          style="background: #1f1f1f; padding: 5px"
          @click="$emit('set-cart-flag', isCartFlag)"
        >
          <img src="../assets/icons/cart.svg" />
        </button>
        <button
          style="background: #1f1f1f; padding: 5px"
          @click="$emit('set-favorite-flag', isFavoriteFlag)"
        >
          <img src="../assets/icons/heart.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    productPic: String,
    productName: String,
    quantity: String,
  },
  methods: {},
  data() {
    return {
      isFavoriteFlag: Boolean,
    };
  },
};
</script>

<style scoped>
h3 {
  color: #fff;
}

img {
  width: 100%;
  height: 190px;
  object-fit: cover;
}

.flex-ctrl {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin: 0 12px;
  margin-top: 20px;
}

.flex-ctrl img {
  width: 25px;
  height: 25px;
}

.flex-ctrl > *:last-child {
  margin-left: 10px;
}
</style>
