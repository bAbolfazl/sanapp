import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";

const mainApi = axios.create({
  baseURL: "https://stage-api.sanaap.co/api/v2/app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const baseApi = axios.create({
  baseURL: "https://stage-api.sanaap.co/base/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const addInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    function (response: AxiosResponse) {
      return response;
    },
    function (error: AxiosError) {
      // location.href = '/';
      console.error(error);
    }
  );
};

addInterceptor(mainApi);
addInterceptor(baseApi);

export { mainApi, baseApi };
