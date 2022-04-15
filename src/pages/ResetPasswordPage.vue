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
          v-model="resetPasswordRequest.password"
        />
      </div>
      <div class="form-ctrl">
        <label class="form-label">Comfirm Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          v-model="resetPasswordRequest.confirmPassword"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click="resetPassword">
        Change Password
      </button>
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
import UserDataService from "../services/UserDataService";

export default {
  name: "ResetPasswordPage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },
  data() {
    return {
      resetPasswordRequest: { password: "", confirmPassword: "" },
      message: "",
      userInfor: null,
      userData: { email: "", password: "" },
    };
  },

  methods: {
    // handleClick: function (event) {
    //   event.preventDefault();
    //   console.log("Remember me HanDo");
    // },

    resetPassword(ev) {
      ev.preventDefault();

      console.log(this.resetPasswordRequest.password);
      console.log(this.resetPasswordRequest.confirmPassword);

      if (
        this.resetPasswordRequest.password ===
        this.resetPasswordRequest.confirmPassword
      ) {
        var userEmail = localStorage.getItem("userEmail");
        console.log(userEmail);
        this.userData.email = userEmail;
        this.userData.password = this.resetPasswordRequest.password;

        UserDataService.put_password(this.userData)
          .then((reponse) => {
            var result = reponse.data;
            console.log(result);
            this.$router.push({name:"LoginPage"})
            //console.log(message);
            this.$router.push({ name: "LoginPage" });
          })
          .catch((e) => {
            this.resetPasswordRequest.password = "";
            this.resetPasswordRequest.confirmPassword = "";
            this.userData.email = "";
            this.userData.password = "";
            this.message = e.reponse.data.message;
            console.log(e);
          });
      } else {
        this.message = "The password do not match";
      }
    },
  },

  mounted() {
    this.message = "";
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
