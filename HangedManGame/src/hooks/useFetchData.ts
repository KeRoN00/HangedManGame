import { useState, useEffect, useCallback } from "react";
import { FetchResponse } from "../@types.game";
export const useFetchData = (): FetchResponse => {
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word"
      );
      const res = await response.json();
      setData(res);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, status, fetchData };
};
