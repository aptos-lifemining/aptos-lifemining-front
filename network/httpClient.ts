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
    console.log(address)
    // const address = '0xb8542ced3b91535ec569a537a7eff91bec498f25bca349473b6e2856529787ba';
    if (address) {
      //@ts-ignore
      config.headers.address = address;
    }
  } catch (error) {} // TODO : server side props 에서 address가 필요할 경우, 이 부분을 수정해야함
  return config;
});

HttpClient.interceptors.response.use();

export default HttpClient;
