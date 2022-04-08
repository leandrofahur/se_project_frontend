import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ContactUsPage from "../pages/ContactUsPage";
import UserProfilePage from "../pages/UserProfilePage";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },

  { 
    path: "/signup",
    name: "SignupPage",
    component: SignupPage,
  },

  {
    path: "/forgotpassword",
    name: "ForgotPasswordPage",
    component: ForgotPasswordPage,
  },

  {
    path: "/resetpassword",
    name: "ResetPasswordPage",
    component: ResetPasswordPage,
  },

  {
    path: "/contactus",
    name: "ContactUsPage",
    component: ContactUsPage,
  },

  {
    path: "/userprofile",
    name: "UserProfilePage",
    component: UserProfilePage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
