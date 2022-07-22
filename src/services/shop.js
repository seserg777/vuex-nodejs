import axios from "axios";
export default {
    getProducts (cb) {
        axios.get(`https://62d4757a5112e98e484fa7f0.mockapi.io/posts?page=1&limit=10`)
        .then((response) => {
            console.log('getProducts then', response);
            cb(response.data);
        });
    }
}