<template>
  <header>
    <a><img src="../assets/icons/logo.jpeg" /></a>
    <nav>
      <ul>
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
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  background-color: #ad1457;
  color: #fff;
  padding: 15px 30px;
}

nav {
  display: flex;
  flex-direction: row;
}

ul {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

li {
  list-style: none;
  margin: 10px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
