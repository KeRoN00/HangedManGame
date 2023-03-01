import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPlaythroughState } from "../../types/@types.playthrough";

const API_KEY: string = import.meta.env.VITE_API_KEY;
const HOST: string = import.meta.env.VITE_APP_API_HOST;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": HOST,
  },
};

export const fetchData = createAsyncThunk(
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
        `https://random-word-api.p.rapidapi.com/L/${wordLength}`,
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

export const playthroughSlice = createSlice({
  name: "playthrough",
  initialState: initialPlaythroughState,
  reducers: {
    toggleGameRunning: (state, action: PayloadAction<boolean>) => {
      state.isRunning = action.payload;
    },
    incrementScore: (state) => {
      state.score = state.score + 1;
    },
    resetScore: (state) => {
      state.score = 0;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.fetchProperties.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.fetchProperties.isLoading = false;
        state.fetchProperties.word = action.payload;
        state.fetchProperties.error = "";
        console.log("Saved data", action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.fetchProperties.isLoading = false;
        state.fetchProperties.word = "";
        state.fetchProperties.error =
          action.error.message || "Something went wrong...";
      });
  },
});
export const { toggleGameRunning, incrementScore, resetScore } = playthroughSlice.actions;

export default playthroughSlice.reducer;
