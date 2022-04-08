<template>
  <NavbarComponent />
  <HeroComponent filename="hero01.png" />
  <div class="container justify-content-center">
    <form>
      <div class="form-ctrl">
        <label class="form-label">E-mail</label>
        <input
          type="email"
          class="form-control"
          name="email"
          placeholder="Email"
        />
      </div>
      <div class="form-ctrl">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Create Account</button>
      <p class="pt-3 text-center">
        Need to sign up? <a href="/signup">Click here</a>
      </p>
    </form>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";

export default {
  name: "LoginPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
};
</script>

<style scoped>
form {
  padding: 100px 30px 100px 30px;
  width: 400px;
  height: 100%;
  margin: auto;
}

.form-ctrl {
  margin: 40px 0;
}

a {
  text-decoration: underline;
}

button {
  background-color: #ad1457;
  border: 1px solid #ad1457;
  width: 100%;
}

button:hover {
  background-color: #9c114d;
  border: 1px solid #9c114d;
}
</style>
