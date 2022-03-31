<template>
  <header>
    <div class="container">
      <nav class="row align-items-center justify-content-space-between">
        <div class="col">
          <a class="navbar-brand logo" href="#"
            ><img src="../assets/icons/logo.jpeg"
          /></a>
        </div>
        <div class="col">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Women</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Men</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">COntact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><img src="../assets/icons/user_circle.svg"
              /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><img src="../assets/icons/heart.svg"
              /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #ad1457;
  color: #fff;
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

<!-- <ul>
        <li><a href="#women">Women</a></li>
        <li><a href="#men">Men</a></li>
        <li><a href="#sales">Sales</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div>
      <ul>
        <li>
          <a href="#"><img src="../assets/icons/user_circle.svg" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/icons/heart.svg" /></a>
        </li>
        <li>
          <a href="#"><img src="../assets/icons/cart.svg" /></a>
        </li>
      </ul>
    </div> -->
