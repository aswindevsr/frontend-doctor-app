
const { default: axios } = require("axios")


const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL:'https://backend-doctor-web-strapi.onrender.com/api',
    headers:{
        "Authorization":`Bearer ${API_KEY}`
    }
})

const getCategory =()=>axiosClient.get('/categories?populate=*')
const getDoctorList =()=>axiosClient.get('/doctors?populate=*')
const getDoctoraByCategory =(category)=> axiosClient.get('/doctors?filters[categories][Name][$in]='+category+'&populate=*')

export default {
    getCategory,
    getDoctorList,
    getDoctoraByCategory
}