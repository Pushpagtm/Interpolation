// api.js
import Axios from "axios";
let urls = {
    development: 'http://127.0.0.1:8000/',
}
const Api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default Api;