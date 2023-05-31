import { useCallback, useEffect, useState } from 'react';
import { FIREBASE_URL, PARAM_JSON } from '../util/firebase-url';

const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(`${FIREBASE_URL}/${PARAM_JSON}`);
    const data = await response.json();
    let dataTransform = [];

    for (const key in data) {
      dataTransform.push({
        id: key,
        ...data[key],
      });
    }
    setLoading(false);
    setData(dataTransform);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading };
};

export default useHttp;
