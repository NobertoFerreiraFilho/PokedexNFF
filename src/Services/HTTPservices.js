import axios from "axios";


//Not finished!!!

const httpservice = {
    get: (url) => axios.get,
    post: (url) => axios.post,
    put: (url) => axios.put,
    delete: (url) => axios.delete
    }

export default httpservice;
