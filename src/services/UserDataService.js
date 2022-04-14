import http from "../http-common.js";

class UserDataService {

    // get(email){
    //     return http.get(`/users/${email}`);
    // }

    getUser(id){
        return http.get(`/users/${id}`);
    }

    getAddress(id){
        return http.get(`/userAddresses/${id}`);
    }

    getPayment(id){
        return http.get(`/userPayments/${id}`);
    }

    getPhone(id){
        return http.get(`/userPhones/${id}`);
    }

    put_password(data){
        return http.put(`/secretpath/resetpassword`, data);
    }

    forgotPasswordPost(email){
        return http.post(`/forgotpassword`,email);
    }

    userInfoPut(id, data){
        return http.put(`/users/${id}`, data);
    }

    userAddressPost(id, data){
        return http.post(`/userAddresses/${id}`, data);
    }

    userPaymentPost(id, data){
        return http.post(`/userPayments/${id}`, data);
    }

    userPhonePost(id, data){
        return http.post(`/userPhones/${id}`, data);
    }

}

export default new UserDataService();