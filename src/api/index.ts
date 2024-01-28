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

/**
 *
 * @param phone
 * @returns 发送验证码
 */
export const captchaSent = (data: object) =>
  fetch.get("/captcha/sent", { params: data });

/**
 *
 * @param phone 手机号
 * @param captcha 验证码
 * @returns 校验验证码是否正确
 */
export const captchaVerify = (data: object) =>
  fetch.get("/captcha/verify", { params: data });

/**
 * @param phone 手机号
 * @param captcha 验证码
 * @returns 登录接口，传递手机号和验证码
 */
export const loginCellphone = (data: object) =>
  fetch.get("/login/cellphone", { params: data });

/**
 * @param uid 用户id
 * @returns 请求用户喜欢的歌曲
 */
export const getLikelist = (data: object) =>
  fetch.get("/likelist", { params: data });

/**
 *
 * @param ids 多个以,分割
 * @returns 获取歌曲详情
 */
export const getSongDetails = (data: object) =>
  fetch.get("/song/detail", { params: data });

/**
 *
 * @param keywords 关键词
 * @param type 如果传 'mobile' 则返回移动端数据
 * @returns 返回搜索建议
 */
export const getSearchSuggest = (data: object) =>
  fetch.get("/search/suggest", { params: data });
