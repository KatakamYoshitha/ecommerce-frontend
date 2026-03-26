import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-12cf.up.railway.app"
});

export default API;
