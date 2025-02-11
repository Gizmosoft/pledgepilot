import axios from "axios";

// Set base URL dynamically based on environment
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://pledgepilot-backend.onrender.com/" // Production base URL
    : "http://localhost:3001/"; // Development base URL

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response.status === 401) {
      const response = await axios.get("refresh/", { withCredentials: true });

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data["accessToken"]}`;

        return axios(error.config);
      }
    }
    return Promise.reject(error); // Ensure errors are propagated correctly
  }
);
