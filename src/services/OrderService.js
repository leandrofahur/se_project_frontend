import http from "../http-common.js";

class OrderService {
  getAllProducts() {
    return http.get("/products");
  }

  getProduct(id) {
    return http.get(`/products/${id}`);
  }

  getAllCategories() {
    return http.get("/categories");
  }

  putProduct(id, data) {
    return http.put(`/products/${id}`, data);
  }

  // getCart() {
  //   return http.get(`/cart`);
  // }

  // postCart(data) {
  //   return http.post(`/cart`, data);
  // }
}

export default new OrderService();
