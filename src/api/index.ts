import { fetch } from "@/services";
export const personalized = (data: any = {}) =>
  fetch.get("/personalized", { params: data });
export const bannerList = () => fetch.get("/banner");
export const newsong = (data: object) =>
  fetch.get("/personalized/newsong", { params: data });
export const trackAll = (data: object) =>
  fetch.get("/playlist/detail", { params: data });
export const getSubscribers = (data: object) =>
  fetch.get("/playlist/subscribers", { params: data });
export const getSongUrl = (data: object) =>
  fetch.get("/song/url", { params: data });
export const checkMusic = (data: object) =>
  fetch.get("/check/music", { params: data });
