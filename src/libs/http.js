import axios from 'axios';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = "";

//http request 拦截器
export function post(url, data) {
  return axios.post(url, data);
}
export function get(url, data) {
  return axios.get(url, data);
}