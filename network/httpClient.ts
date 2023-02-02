import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

const HttpClient = axios.create({
  baseURL: baseURL,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  // withCredentials: true,
});

// interceptors
HttpClient.interceptors.request.use(async (config) => {
  // Retrieve the address from the storage
  try {
    const address = sessionStorage.getItem('wallet_address');
    if (address) {
      //@ts-ignore
      config.headers.address = address;
    }
  } catch (error) {} // TODO : server side props 에서 address가 필요할 경우, 이 부분을 수정해야함
  return config;
});

HttpClient.interceptors.response.use();

export default HttpClient;
