import http from "../http-common";

class ArticlesService {
    index(page = 1, limit= 10) {
        return http.get(`/posts?page=${page}&limit=${limit}`);
    }
}

export default new ArticlesService();