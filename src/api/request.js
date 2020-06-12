import HttpRequest from "./axios";
const config = {
  baseUrl: {
    dev: "http://localhost:8090",
    pro: "//xcpeng.cn"
  }
};
const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

const axios = new HttpRequest(baseUrl);
export default axios;
