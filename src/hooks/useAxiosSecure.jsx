import axios from "axios";
import { useEffect } from "react";



const axiosSecure = axios.create({
    baseURL : 'http://localhost:5000' ,
    withCredentials : true
})


const useAxiosSecure = () => {

    useEffect(()=>{
        axios.interceptors.response.use(res => {
            return res ;
        }) , error => {
            console.log( 'hellalllalaalala ' ,error);
        }
    } , [])

    return axiosSecure;
};

export default useAxiosSecure;