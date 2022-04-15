<template>
  <NavbarComponent />
  <HeroComponent filename="hero01.png" />
  <div class="container justify-content-center">
    <form>
      <div class="form-ctrl">
        <label class="form-label" for="email">E-mail</label>
        <input
          type="email"
          class="form-control"
          name="email"
          v-model="userLoginRequest.email"
        />
      </div>
      <div class="form-ctrl">
        <label class="form-label" for="password">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="userLoginRequest.password"
        />
      </div>
      <p class="pt-3 text-center">
        Forget the password? <a href="/forgotpassword">Click here</a>
      </p>
      <br />
      <button type="submit" class="btn btn-primary" @click="login">
        Login
      </button>
      <p class="pt-3 text-center">
        Need to sign up? <a href="/signup">Click here</a>
      </p>

      <br /><br />
      <p>{{ message }}</p>
    </form>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import LoginService from "../services/LoginService";

export default {
  name: "LoginPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
  data() {
    return {
      userLoginRequest: { email: "", password: "" },
      message: "",
      loginFrag: false,
    };
  },
  methods: {
    login(ev) {
      ev.preventDefault();
      LoginService.login(this.userLoginRequest)
        .then((reponse) => {
          var user = reponse.data;
          this.loginFrag = true;
          console.log(user);
          localStorage.setItem("email", user.email);
          localStorage.setItem("id", user.id);
          localStorage.setItem("login", this.loginFrag);
          this.$router.push({ name: "UserProfilePage" });
        })
        .catch((e) => {
          this.userLoginRequest.email = "";
          this.userLoginRequest.password = "";
          this.message = e.reponse.data.message;
        });
    },
  },
  mounted() {
    this.message = "";
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
