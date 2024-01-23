import { ApiService } from "./apiService";
const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";
const axiosInstance = new ApiService({
  baseURL: baseUrl,
});
export const fetch = axiosInstance.fetch;
