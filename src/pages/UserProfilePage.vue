<template>
  <NavbarComponent />
  <HeroComponent filename="hero04.png" />
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <br />
        <p class="welcome">WELCOME,</p>
        <p class="name">HanDo</p>
        <br /><br />

        <p><img src="../assets/icons/user_circle_b.svg" />My Profile</p>
        <br />
        <p><img src="../assets/icons/truck.svg" />Order Status</p>
        <br />
        <p><img src="../assets/icons/logout.svg" />Sign Out</p>
        <br />
      </div>

      <br />
      <div class="col">
        <form>
          <div class="form-ctrl">
            <label class="form-label">User Name</label>
            <input
              type="text"
              class="form-control"
              name="username"
              
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastname"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Address1</label>
            <input
              type="text"
              class="form-control"
              name="address1"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Province</label>
            <input
              type="text"
              class="form-control"
              name="province"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Country</label>
            <input
              type="text"
              class="form-control"
              name="country"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Phone Number</label>
            <input
              type="text"
              class="form-control"
              name="phonenumber"
              placeholder="(###) ### - ####"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">CVC</label>
            <input type="text" class="form-control" name="cvc" placeholder="" />
          </div>
        </form>
      </div>

      <br />
      <div class="col">
        <form>
          <div class="form-ctrl">
            <label class="form-label">First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstname"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Postal Code</label>
            <input
              type="text"
              class="form-control"
              name="postalcode"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Address2</label>
            <input
              type="text"
              class="form-control"
              name="address2"
              placeholder=""
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Card Number</label>
            <input
              type="text"
              class="form-control"
              name="cardnumber"
              placeholder=""
            />
          </div>
        </form>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save Profile</button>
  </div>

  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import UserDataService from "../services/UserDataService";

export default {
  name: "UserProfilePage",
  components: {
    NavbarComponent,
    FooterComponent,
    HeroComponent,
  },

  data() {
    return {
      user: null,
      userName: "",
    };
  },

  methods: {
    retriveUser() {
      
      var id = localStorage.getItem("id");
      UserDataService.get(id)
        .then((response) => {
          this.user = response.data;
          //this.userName = this.user.userName;
          console.log(this.user);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    displayUserName() {
      return this.userName;
    },
  },
  mounted() {
    this.retriveUser();
  },

  computed: {},
};
</script>

<style scoped>
.welcome {
  font-size: 30px;
}

.name {
  font-size: 25px;
  font-weight: bold;
}

.col {
  margin-top: 10px;
  padding-top: 10px;
  margin-bottom: 20px;
}

form {
  /* padding: 100px 30px 100px 30px; */
  width: 400px;
  height: 100%;
  /* margin: auto; */
}

.form-ctrl {
  margin: 13px 0;
}

a {
  text-decoration: underline;
}

button {
  background-color: #ad1457;
  border: 1px solid #ad1457;
  width: 31%;
  margin-left: 440px;
  margin-bottom: 50px;
}

button:hover {
  background-color: #9c114d;
  border: 1px solid #9c114d;
}
</style>
