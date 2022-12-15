import http from "../http-common";
import dotenv from 'dotenv';
dotenv.config();

class UserService {
    login(data) {
        return (data.login === 'admin' && data.password === 'admin') ? true : false;
    }

    index(page = 1, limit= 10) {
        return http.get(`${process.env.HOST}/users?page=${page}&limit=${limit}`);
    }
}

export default new UserService();