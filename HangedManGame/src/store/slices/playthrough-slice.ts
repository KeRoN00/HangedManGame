import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialPlaythroughState } from "../../types/@types.playthrough";
import { useFetchData } from "../../hooks/useFetchData";

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
    },
    goToNextRound: (state) => {
      state.currentRound = state.currentRound + 1;
    },
    incrementMistakes: (state) => {
      state.mistakes = state.mistakes + 1;
    },
    resetMistakes: (state) => {
      state.mistakes = 0;
    },
    endTheGame: (state) => {
      state.mistakes = 0;
      state.score = 0;
      state.isRunning = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(useFetchData.pending, (state) => {
        state.fetchProperties.isLoading = true;
      })
      .addCase(useFetchData.fulfilled, (state, action) => {
        state.fetchProperties.isLoading = false;
        state.fetchProperties.word = action.payload;
        state.fetchProperties.error = "";
        console.log("Saved data", action.payload);
      })
      .addCase(useFetchData.rejected, (state, action) => {
        state.fetchProperties.isLoading = false;
        state.fetchProperties.word = "";
        state.fetchProperties.error =
          action.error.message || "Something went wrong...";
      });
  },
});
export const {
  toggleGameRunning,
  incrementScore,
  resetScore,
  goToNextRound,
  incrementMistakes,
  resetMistakes,
  endTheGame,
} = playthroughSlice.actions;

export default playthroughSlice.reducer;
