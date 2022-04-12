import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://burger-5.firebaseio.com/'
});

axiosOrders.interceptors.request.use(req => {
  console.log('[In request interceptor]', req);
  return req;
});

axiosOrders.interceptors.response.use(res => {
  console.log('[In response interceptor]', res);
  return res;
}, err => {
  console.log('[In error response interceptor]', err);
  throw err;
});

export default axiosOrders;