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
          v-model="userSignupRequest.userName"
        />
      </div>
      <div class="form-ctrl">
        <label class="form-label">E-mail</label>
        <input
          type="email"
          class="form-control"
          name="email"
          v-model="userSignupRequest.email"
        />
      </div>
      <div class="form-ctrl">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="userSignupRequest.password"
        />
      </div>
      <div class="form-ctrl">
        <label class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="userSignupRequest.confirmPassword"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="signup">
        Create Account
      </button>

      <p class="pt-3 text-center">Already a user? <a href="/login">login</a></p>
      <p>{{ message }}</p>
    </form>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import SignupService from "../services/SignupService";

export default {
  name: "SignupPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
  data() {
    return {
      // userSignupRequest: { userName: "", email: "", password: "", confirmPassword: ""},
      userSignupRequest: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      message: "",
    };
  },

  methods: {
    signup(ev) {
      ev.preventDefault();

      if (
        this.userSignupRequest.password ===
        this.userSignupRequest.confirmPassword
      ) {
        SignupService.signup(this.userSignupRequest)
          .then((response) => {
            var user = response.data;
            console.log(user);
            localStorage.setItem("id", user.id);
            localStorage.setItem("email", user.email);
            this.$router.push({ name: "UserProfilePage" });
          })
          .catch((e) => {
            this.userSignupRequest.userName = "";
            this.userSignupRequest.email = "";
            this.userSignupRequest.password = "";
            (this.userSignupRequest.confirmPassword = ""),
              (this.message = e.response.data.message);
          });
      } else{
        this.message = "The password do not match";
      }
    },
  },

  mounted() {
    // if(userSignupRequest.password == confirmPassword){
    //   this.signup();
    // } else{
    //   this.message = "The Password is incorrect";
    // }
    //this.signup();
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
