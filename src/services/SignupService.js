import http from "../http-common.js";

class SignupService{
    signup(data){
        return http.post(`/users`,data);
    }
}

export default new SignupService();