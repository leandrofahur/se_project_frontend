<template>
  <NavbarComponent />
  <HeroComponent filename="hero02.png" />
  <div class="container justify-content-center">
    <form>
      <div class="form-ctrl">
        <label class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          name="email"
          placeholder="Email"
        />
      </div>
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
      <div class="form-ctrl">
        <label class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Confirm Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Create Account</button>

      <p class="pt-3 text-center">Already a user? <a href="/login">login</a></p>
    </form>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";

export default {
  name: "SignupPage",
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
  width: 450px;
  height: 100%;
  margin: auto;
}

.form-ctrl {
  margin: 40px 0;
}

label,
p {
  color: #f9fbe7;
}

a {
  text-decoration: underline;
}

button {
  background-color: #ad1457;
  width: 100%;
}
</style>
