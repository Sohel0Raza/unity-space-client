import axios from "axios";
import { HTTP_METHOD } from "../services/utils";

export const useHttp = (url, method, data) => {
  switch (method) {
    case HTTP_METHOD.GET:
      return axios.get(url);
    case HTTP_METHOD.POST:
      return axios.post(url, data);
    case HTTP_METHOD.PUT:
      return axios.put(url, data);
    case HTTP_METHOD.PATCH:
      return axios.patch(url, data);
    case HTTP_METHOD.DELETE:
      return axios.delete(url);
    default:
      break;
  }
};
