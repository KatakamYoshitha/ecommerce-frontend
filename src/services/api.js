import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-bcab.up.railway.app/api"
});

export default API;
