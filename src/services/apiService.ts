import axios, { AxiosInstance } from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { apiWhitelist } from "./apiWhitelist";
import { IAxiosInstanceProps } from "./type";
const timeout: string = process.env.REACT_APP_API_TIMEOUT || "50000";
export class ApiService {
  public fetch: AxiosInstance;
  constructor({ baseURL }: IAxiosInstanceProps) {
    this.fetch = axios.create({
      baseURL,
      timeout: parseInt(timeout, 10),
    });
    this.fetch.interceptors.request.use(
      (config) => {
        // 添加请求拦截器的操作
        NProgress.start(); // 进度条 表示已经在请求
        const accountInfo = { token: "" }; // 获取token
        if (accountInfo?.token) {
          config.headers.Authorization = `${accountInfo.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.fetch.interceptors.response.use(
      (response) => {
        // 添加响应拦截器的操作
        NProgress.done(); // 表示加载完毕关闭请求进度条
        const requestUrl = response.config.url || "";
        const isWhiteList = apiWhitelist.some((item) => {
          return item.includes(requestUrl);
        });
        const result = response.data;
        if (isWhiteList) {
          return result;
        } else if (result?.code === 200) {
          return result?.result ?? {};
        } else {
          return false;
        }
      },
      (error) => {
        NProgress.done();
        return Promise.reject(error);
      }
    );
  }
}
