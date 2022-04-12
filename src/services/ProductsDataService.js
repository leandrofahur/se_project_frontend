import http from "../http-common.js";

class ProductDataService {
    get(id) {
        return http.get(`/products/${id}`)
    }

    getAll(){
        return http.get("/products")
    }

    register(id, data) {
        return http.put(`/${id}/courses`, data);
    }

}

export default new ProductDataService();