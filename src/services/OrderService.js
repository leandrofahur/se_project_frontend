import http from "../http-common.js";

class OrderService {
  getAllProducts() {
    return http.get("/products");
  }

  getAllCategories() {
    return http.get("/categories");
  }
}

export default new OrderService();
