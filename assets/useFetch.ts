import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  // BASE_URL=https://api.coinpaprika.com/v1/${params}
  useEffect(() => {
    axios
      // If needed ad params to base URL
      .get(`${url}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, []);
  return data;
};
