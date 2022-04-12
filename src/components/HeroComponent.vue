<template>
  <img :src="require(`@/assets/images/${filename}`)" />
</template>

<script>
export default {
  name: "HeroComponent",
  props: {
    filename: String,
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
