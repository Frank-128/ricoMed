import Axios from "axios"
import Cookies from "js-cookie";


export const axios = Axios.create({
    baseURL:"http://localhost:8000/",
    timeout:30000,
})


axios.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true; 
            try {
                const refreshToken = JSON.parse(Cookies.get("authenticatedUser")).refresh;
                const res = await axios.post('accounts/refresh',{refresh:refreshToken})
                const {access} = res.data
                console.log(access)
                localStorage.setItem('access',access)
                originalRequest.headers.Authorization = `Bearer ${access}`;
                return axios(originalRequest)
            }catch(err){
            console.log("Error from the response interceptor")
            console.log(err)
        }
    }
    Promise.reject(error)
    }
)