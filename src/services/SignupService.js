import http from "../http-common.js";

class SignupService{

    signup(data){
        return http.post(`/users`,data);
    }

    //     signup(data){
    //     return http.post(`/signup`,data);
    // }
}

export default new SignupService();