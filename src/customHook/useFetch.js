import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      try {
        response = await fetch(url);
        if (response.status >= 400 && response.status <= 600) {
          throw new Error();
        }
        const jsonRes = await response.json();
        setResponse(jsonRes);
      } catch (err) {
        console.log('error ', err);
        setError(true);
      }
    };
    fetchData();
  }, [url]);

  return { response, error };
};
