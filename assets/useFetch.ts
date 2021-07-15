import axios from "axios";

export const useFetch = async (url) => {
  const res = await axios.get(url);
  console.log(res);
  return res;
};
