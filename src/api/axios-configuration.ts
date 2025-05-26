import axios from "axios";
import { auth } from "./firebase";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // TODO: Keep this if we still need it for CORS
});

// Add an interceptor to attach the Firebase ID token
axiosInstance.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axiosInstance };
