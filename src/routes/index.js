import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ContactUsPage from "../pages/ContactUsPage";
import UserProfilePage from "../pages/UserProfilePage";
import ShoppingPage from "../pages/ShoppingPage";
import FavoritesPage from "../pages/FavoritesPage";
import CartPage from "../pages/CartPage";

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

  {
    path: "/shopping",
    name: "ShoppingPage",
    component: ShoppingPage,
  },
  {
    path: "/favorites",
    name: "FavoritesPage",
    component: FavoritesPage,
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
