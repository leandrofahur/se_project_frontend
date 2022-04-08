<template>
  <NavbarComponent />
  <HeroComponent filename="hero03.png" />
  <div class="container justify-content-center">
    <form>
      <p class="q">Reset your password</p>

      <div class="form-ctrl">
        <label class="form-label">New Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
        />
      </div>
       <div class="form-ctrl">
        <label class="form-label">Comfirm Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary" v-on:click="handleClick">
        Change Password
      </button>
      <p class="pt-3 text-center">
        Need to Log in? <a href="/login">Click here</a>
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
  name: "ResetPasswordPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
  methods: {
    handleClick: function (event) {
      event.preventDefault();
      console.log("Remember me HanDo");
    },
  },
};
</script>

<style scoped>

p {
  text-align: center;
}

.q {
   font-size: 19.87px;
   font-style: italic;
   font-weight: bold;
}

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
