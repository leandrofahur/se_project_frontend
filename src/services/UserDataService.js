import http from "../http-common.js";

class UserDataService {

    // get(email){
    //     return http.get(`/users/${email}`);
    // }

    get(id){
        return http.get(`/users/${id}`)
    }


}

export default new UserDataService();