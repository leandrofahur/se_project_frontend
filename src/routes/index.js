import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ShoppingPage from "../pages/ShoppingPage";
import ProductPage from "../pages/ProductPage";
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
    path: "/shopping",
    name: "ShoppingPage",
    component: ShoppingPage,
  },
  {
    path: "/product/:id",
    name: "ProductPage",
    component: ProductPage,
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
