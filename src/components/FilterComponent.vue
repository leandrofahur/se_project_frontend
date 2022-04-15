<template>
  <div class="col-4">
    <h1 style="margin: 100px 0 0 0">Collections</h1>
    <h3 style="margin: 50px 0 0 0" class="visually-hidden">Filter</h3>
    <div class="form-check mt-3 visually-hidden">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="all"
        name="selectedFilter"
        checked
      />
      <label class="form-check-label" for="all">All</label>
    </div>
    <div class="form-check mt-1 visually-hidden">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="women"
        name="selectedFilter"
        disabled
      />
      <label class="form-check-label" for="women">Women</label>
    </div>
    <div class="form-check mt-1 visually-hidden">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="men"
        name="selectedFilter"
        disabled
      />
      <label class="form-check-label" for="men">Men</label>
    </div>
    <h3 style="margin: 50px 0 0 0">Prices</h3>
    <div class="form-check mt-3">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="range01"
        name="selectedPrice"
      />
      <label class="form-check-label" for="range01">$50 - $150</label>
    </div>
    <div class="form-check mt-1">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="range02"
        name="selectedPrice"
      />
      <label class="form-check-label" for="range02">$150 - $250</label>
    </div>
    <div class="form-check mt-1">
      <input
        class="form-check-input"
        type="radio"
        value=""
        id="range03"
        name="selectedPrice"
      />
      <label class="form-check-label" for="range03">$250 - $$$</label>
    </div>
    <button
      class="btn btn-primary"
      style="width: 180px; margin: 50px 0"
      @click="onClick"
    >
      Apply
    </button>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      isSelectedFilter: Array,
      isSelectedPrice: String,
    };
  },
  methods: {
    onClick(e) {
      e.preventDefault();

      var all = document.getElementById("all").checked;
      var women = document.getElementById("women").checked;
      var men = document.getElementById("men").checked;

      var range01 = document.getElementById("range01").checked;
      var range02 = document.getElementById("range02").checked;
      var range03 = document.getElementById("range03").checked;

      this.isSelectedFilter = [all, women, men];
      this.isSelectedPrice = [range01, range02, range03];
      // console.log(this.isSelectedFilter);
      // console.log(this.isSelectedPrice);

      const selected = {
        isSelectedFilter: this.isSelectedFilter,
        isSelectedPrice: this.isSelectedPrice,
      };
      this.$emit("filters-selected", selected);
    },
  },
};
</script>

<style scoped></style>
