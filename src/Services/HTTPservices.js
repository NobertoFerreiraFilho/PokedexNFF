import axios from "axios";

const httpservice = {
    get: (url) => axios.get,
    post: (url) => axios.post,
    put: (url) => axios.put,
    delete: (url) => axios.delete
    }

export default httpservice;
