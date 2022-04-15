<template>
  <NavbarComponent />
  <HeroComponent filename="hero04.png" />
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <br />
        <p class="welcome">WELCOME,</p>
        <p class="name">{{ updateUserInfo.userName }}</p>
        <br /><br />

        <p class="myProfile">
          <img src="../assets/icons/user_circle_b.svg" />My Profile
        </p>
        <br />
        <p>
          <a @click="logout"
            ><img src="../assets/icons/logout.svg" />Sign Out</a
          >
        </p>
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
              v-model="updateUserInfo.userName"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastname"
              v-model="updateUserInfo.lastName"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Address1</label>
            <input
              type="text"
              class="form-control"
              name="address1"
              v-model="userAddress.addressLine1"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Province</label>
            <input
              type="text"
              class="form-control"
              name="province"
              v-model="userAddress.province"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Country</label>
            <input
              type="text"
              class="form-control"
              name="country"
              v-model="userAddress.country"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Phone Number</label>
            <input
              type="text"
              class="form-control"
              name="phonenumber"
              placeholder="(###) ### - ####"
              v-model="userPnone.number"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">CVC</label>
            <input
              type="text"
              class="form-control"
              name="cvc"
              v-model="userPayment.cvc"
            />
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
              v-model="updateUserInfo.firstName"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              v-model="updateUserInfo.email"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              name="city"
              v-model="userAddress.city"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Postal Code</label>
            <input
              type="text"
              class="form-control"
              name="postalcode"
              v-model="userAddress.postalCode"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Address2</label>
            <input
              type="text"
              class="form-control"
              name="address2"
              v-model="userAddress.addressLine2"
            />
          </div>

          <div class="form-ctrl">
            <label class="form-label">Card Number</label>
            <input
              type="text"
              class="form-control"
              name="cardnumber"
              v-model="userPayment.cardNumber"
            />
          </div>
        </form>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      @click="updateUserInfomations"
    >
      Save Profile
    </button>
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
      id: null,
      user: null,
      address: null,
      payment: null,
      phone: null,
      // userName: "",
      updateUserInfo: {
        firstName: "",
        lastName: "",
        userName: "",
        // password: "",
        // is_admin: false,
        email: "",
      },

      userAddress: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        province: "",
        country: "",
        postalCode: "",
      },

      userPayment: { cardNumber: "", cvc: "" },

      userPnone: { number: "" },
    };
  },

  methods: {
    retriveUser() {
      this.id = localStorage.getItem("id");
      UserDataService.getUser(this.id)
        .then((response) => {
          this.user = response.data;
          this.updateUserInfo.firstName = this.user.firstName;
          this.updateUserInfo.lastName = this.user.lastName;
          this.updateUserInfo.userName = this.user.userName;
          this.updateUserInfo.email = this.user.email;
          console.log(this.user);
          console.log(this.userName);
        })
        .catch((e) => {
          console.log(e);
        });

      if (this.id < 4) {
        UserDataService.getAddress(this.id)
          .then((reponse) => {
            this.address = reponse.data;
            this.userAddress.addressLine1 = this.address.addressLine1;
            this.userAddress.addressLine2 = this.address.addressLine2;
            this.userAddress.city = this.address.city;
            this.userAddress.province = this.address.province;
            this.userAddress.country = this.address.country;
            this.userAddress.postalCode = this.address.postalCode;
            console.log(this.address);
          })
          .catch((e) => {
            console.log(e);
          });

        UserDataService.getPayment(this.id)
          .then((response) => {
            this.payment = response.data;
            this.userPayment.cardNumber = this.payment.cardNumber;
            this.userPayment.cvc = this.payment.cvc;
            console.log(this.payment);
          })
          .catch((e) => {
            console.log(e);
          });

        UserDataService.getPhone(this.id)
          .then((response) => {
            this.phone = response.data;
            this.userPnone.number = this.phone.number;
            console.log(this.phone);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },

    displayUserName() {
      return this.userName;
    },

    updateUserInfomations(ev) {
      ev.preventDefault();
      UserDataService.userInfoPut(this.id, this.updateUserInfo)
        .then((response) => {
          var userInfo = response.data;
          console.log(userInfo);
        })
        .catch((e) => {
          this.updateUserInfo.firstName = "";
          this.updateUserInfo.lastName = "";
          this.updateUserInfo.userName = "";
          // this.updateUserInfo.password = "";
          // this.updateUserInfo.is_admin = false;
          this.updateUserInfo.email = "";
          console.log(e);
        });

      UserDataService.userAddressPost(this.id, this.userAddress)
        .then((reponse) => {
          var userAddress = reponse.data;
          console.log(userAddress);
        })
        .catch((e) => {
          this.userAddress.addressLine1 = "";
          this.userAddress.addressLine2 = "";
          this.userAddress.city = "";
          this.userAddress.province = "";
          this.userAddress.country = "";
          this.userAddress.postalCode = "";
          console.log(e);
        });

      UserDataService.userPaymentPost(this.id, this.userPayment)
        .then((reponse) => {
          var payment = reponse.data;
          console.log(payment);
        })
        .catch((e) => {
          this.userPayment.cardNumber = "";
          this.userPayment.cvc = "";
          console.log(e);
        });

      UserDataService.userPhonePost(this.id, this.userPnone)
        .then((reponse) => {
          var phone = reponse.data;
          console.log(phone);
          this.$router.push({ name: "HomePage" });
        })
        .catch((e) => {
          this.userPnone.number = "";
          console.log(e);
        });
    },

    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },

    profile() {
      this.$router.push({ name: "UserProfilePage" });
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

a:hover {
  cursor: pointer;
}

/* .myProfile {
  color: #ad1457;
} */
</style>
