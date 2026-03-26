import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-f4ac.up.railway.app"
});

export default API;
