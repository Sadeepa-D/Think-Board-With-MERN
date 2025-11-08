// src/api.js
import axios from "axios";

// Base URL dynamic for dev vs prod
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/sadeepa"
    : "/api";

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors if needed
// api.interceptors.request.use(config => {
//   // e.g., add auth token here
//   return config;
// });

export default api;
