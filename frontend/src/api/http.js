import axios from "axios";

const instance = axios.create({
    baseURL: "http://server.chromato99.com"
});

export default instance;
