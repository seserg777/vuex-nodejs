import http from "../http-common";

class ProductService {
    index(page = 1, limit= 10) {
        return http.get(`/products?page=${page}&limit=${limit}`);
    }
}

export default new ProductService();