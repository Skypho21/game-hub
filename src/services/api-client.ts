import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0158b37b55274a7fa0a60864bdb4bc10'
    }
})