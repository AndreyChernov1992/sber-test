import axios from 'axios';
import { mainUrl } from '../endpoints';

const axiosClient = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401) {
      const url = mainUrl
      window.location.href = url;
    }
    console.error(
      'Looks like there was a problem. Status Code: ' + error.status,
    );
    return Promise.reject(error);
  },
);

axiosClient.interceptors.request.use(
  request => request,
  error => {
    if (error.status === 401) {
      const url = mainUrl
      window.location.href = url
    }
    console.error("Looks like there was a problem. Status Code: " + error.status);
    return Promise.reject(error);
  }
)


export default axiosClient;
