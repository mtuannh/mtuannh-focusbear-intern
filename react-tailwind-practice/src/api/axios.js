import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    accept: "*/*",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["X-Request-ID"] = crypto.randomUUID();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error(`API error: ${error.response.status}`, error.response.data);

      if (error.response.status === 401) {
        window.location.href = "/login";
      }
    } else if (error.request) {
      console.error("No response received from the server.");
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timed out.");
    } else {
      console.error("Request error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
