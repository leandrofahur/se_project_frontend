<template>
  <footer>
    <div class="container">
      <ul class="justify-content-center">
        <li>
          <a href="#">Home</a>
        </li>
        <div class="horizontalDivider"></div>
        <li>
          <a href="#">Shopping</a>
        </li>
        <div class="horizontalDivider" />
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul class="justify-content-center pb-3">
        <li class="row2">
          <a href="#"
            ><div class="circle"><img src="../assets/icons/linkedin.svg" /></div
          ></a>
        </li>
        <li class="row2">
          <a href="#"
            ><div class="circle">
              <img src="../assets/icons/instagram.svg" /></div
          ></a>
        </li>
        <li class="row2">
          <a href="#"
            ><div class="circle"><img src="../assets/icons/facebook.svg" /></div
          ></a>
        </li>
        <li class="row2">
          <a href="#"
            ><div class="circle"><img src="../assets/icons/twitter.svg" /></div
          ></a>
        </li>
      </ul>

      <p class="text-center pt-3">
        No.2 _ Scared to Compile Copyright 2022 - All Right Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  height: 320px;
  background-color: #1a1a1a;
  padding-top: 30px;
}

ul {
  display: flex;
  flex-direction: row;
  list-style: none;
}

li {
  padding: 20px;
}

.horizontalDivider {
  height: 40px;
  width: 2px;
  margin-top: 10px;
  background-color: #ad1457;
}

a {
  color: #ad1457;
  text-decoration: none;
}

a:hover {
  color: #f9fbe7;
  text-decoration: underline;
  transform: scale(1.1);
}

.circle {
  position: relative;

  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9e9e9e;
}

.circle:hover {
  transform: scale(1.1);
}

.circle img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

p {
  color: #e0e0e0;
}
</style>
