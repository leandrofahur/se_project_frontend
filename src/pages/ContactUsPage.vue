<template>
  <NavbarComponent />
  <HeroComponent filename="hero05.png" />
  <div class="container justify-content-center">
    <form>
      <p class="q">Contact Us</p>
      <p>Do you have any question?</p>

      <div class="form-ctrl">
        <input
          type="text"
          class="form-control"
          name="name"
          placeholder="Name"
        />
      </div>
       <div class="form-ctrl">
       <input
       type="email"
          class="form-control"
          name="email"
          placeholder="Email"
        />
          </div>
       <textarea id="message" name="message" rows ="4" cols="40">Message</textarea><br><br>
      <button type="submit" class="btn btn-primary" v-on:click="handleClick">
       Send
      </button>
    </form>
  </div>
  <FooterComponent />
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";

export default {
  name: "ContactUsPage",
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
