import axios from "axios";

export const useData = async (url) => {
  try {
    const response = await axios.get(url);
      return response.data;
    }
  catch (error) {
    console.log(error.message);
  }
};
