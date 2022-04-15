<template>
  <header>
    <div class="container">
      <nav class="row align-items-center justify-content-space-between">
        <div class="col">
          <a class="navbar-brand logo" href="/"
            ><img src="../assets/icons/logo.jpeg"
          /></a>
        </div>
        <div class="col">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shopping">Shopping</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contactus">Contact Us</a>
            </li>
            
            <li v-if="loginFrag" class="nav-item">
              <a v-if="loginFrag" class="nav-link" href="/userprofile"
                ><img src="../assets/icons/user_circle.svg"
              /></a>
            </li>
            <li v-else class="nav-item">
              <a class="nav-link" href="/login"
                ><img src="../assets/icons/user_circle.svg"
              /></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/favorites"
                ><img src="../assets/icons/heart.svg"
              /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/cart"
                ><img src="../assets/icons/cart.svg"
              /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      loginFrag: false,
    };
  },
  methods: {
    getLoginFrag() {
      this.loginFrag = localStorage.getItem("login");
      console.log(this.loginFrag);
    },
  },
  mounted() {
    this.getLoginFrag();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #ad1457;
  color: #f9fbe7;
  padding: 15px 30px;
}

ul {
  display: flex;
  flex-direction: row;
}

li {
  padding: 20px;
}

a {
  color: #f9fbe7;
  text-decoration: none;
}

a:hover {
  color: #f9fbe7;
  text-decoration: underline;
  transform: scale(1.1);
}
</style>
