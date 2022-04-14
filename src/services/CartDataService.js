import http from "../http-common.js";

class CartDataService {
    get(id) {
        return http.get(`/products/${id}`)
    }

    getAll(){
        return http.get("/products")
    }

    register(id, data) {
        return http.put(`/${id}/courses`, data);
    }

    post(session_id, product_id, quantity){
        http.post("/cart",{
            "session_id" : session_id,
            "product_id" : product_id,
            "quantity" : quantity
        })
    }

}

export default new CartDataService();