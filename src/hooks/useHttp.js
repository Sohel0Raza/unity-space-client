import axios from "axios";

export const useHttp = (url, method, data) => {
  switch (method) {
    case "GET":
      return axios.get(url);
    case "POST":
      return axios.post(url, data);
    case "PUT":
      return axios.put(url, data);
    case "PATCH":
      return axios.patch(url, data);
      case "DELETE":
        return axios.delete(url);
    default:
      break;
  }
};
