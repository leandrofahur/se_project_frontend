import http from "../http-common.js";

class CartDataService {
    

    getAll(){
        return http.get("/cart")
    }

    

    post(session_id, product_id, quantity){
        http.post("/cart",{
            "sessionId" : session_id,
            "productId" : product_id,
            "quantity" : quantity
        })
    }

}

export default new CartDataService();