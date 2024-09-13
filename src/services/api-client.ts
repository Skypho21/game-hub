import axios from "axios";
// Note will change the managing of ths api key (not secure)
// Temporary until custom backend server can be used as a proxy
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0158b37b55274a7fa0a60864bdb4bc10'
    }
})