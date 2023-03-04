import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY: string = import.meta.env.VITE_API_KEY;
const HOST: string = import.meta.env.VITE_APP_API_HOST;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
  },
};

export const useFetchData = createAsyncThunk(
  "playthrough/fetch",
  async (difficulty: string) => {
    let wordLength: number;
    switch (difficulty) {
      case "easy":
        wordLength = 5;
        break;
      case "medium":
        wordLength = 7;
        break;
      case "hard":
        wordLength = 9;
        break;
      default:
        wordLength = 5;
    }
    try {
      const response = await fetch(
        `https://${HOST}/L/${wordLength}`,
        options
      );
      const res = await response.json();
      console.log("Fetched data", res.word);
      return res.word;
    } catch (error) {
      return error;
    }
  }
);