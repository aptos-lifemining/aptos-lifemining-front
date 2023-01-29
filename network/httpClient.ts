import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

const HttpClient = axios.create({
  baseURL: baseURL,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
  withCredentials: true,
});

// interceptors
HttpClient.interceptors.request.use(async (config) => {
  // Retrieve the JWT from the AuthContext
  const token = 'dummy token';
  // const { token } = useContext(AuthContext);
  if (token) {
    //@ts-ignore
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

HttpClient.interceptors.response.use();

export default HttpClient;
