import axios from "axios";

export default axios.create({
    baseURL: "https://62d4757a5112e98e484fa7f0.mockapi.io",
    headers: {
        "Content-type": "application/json"
    }
});