import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"2b360daa0733411d94ec8adbb7379c18"
    }
})