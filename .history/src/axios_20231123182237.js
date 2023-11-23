import axios from "axios"

const instance=axios.create(
    {
        baseURL:'https://us-central1-clone-a7565.cloudfunctions.net/api',
        withCredentials: true,
    }
);

export default instance;