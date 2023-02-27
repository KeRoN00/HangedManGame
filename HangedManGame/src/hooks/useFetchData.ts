import { useState } from "react";
import { FetchResponse } from "../@types.game";
export const useFetchData = (): FetchResponse => {
  const [data, setData] = useState<string>('');
  const [error, setError] = useState<any>(null);

  const API_KEY: string = import.meta.env.VITE_API_KEY;
  const HOST: string = import.meta.env.VITE_APP_API_HOST;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };

  const fetchData = async (difficulty: string) => {
    let wordLength: number;
    switch(difficulty){
      case 'easy':
        wordLength = 5;
        break;
      case 'medium':
        wordLength = 7;
        break;
      case 'hard':
        wordLength = 9;
        break;
      default: 
      wordLength = 5;
    }
    
    try {
      const response = await fetch(
        `https://random-word-api.p.rapidapi.com/L/${wordLength}`,
        options
      );
      const res = await response.json();
      setData(res.word);
      console.log("From useFetchData hook:", res.word);
    } catch (err) {
      setError(err);
    }
  };

  return { data, error, fetchData };
};
