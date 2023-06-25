import { createAsyncThunk } from "@reduxjs/toolkit";




export const useFetchData = createAsyncThunk(
  "playthrough/fetch",
  async (difficulty: string) => {
    let wordLength: number;
    switch (difficulty) {
      case "easy":
        wordLength = 5;
        break;
      case "medium":
        wordLength = 8;
        break;
      case "hard":
        wordLength = 11;
        break;
      default:
        wordLength = 5;
    }
    try {
      const response = await fetch(
        `https://random-word-api.herokuapp.com/word?length=${wordLength}`
      );
      const res = await response.json();
      console.log("Fetched data", res[0]);
      return res[0];
    } catch (error) {
      return error;
    }
  }
);