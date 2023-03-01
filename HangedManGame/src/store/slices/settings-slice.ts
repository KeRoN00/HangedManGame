import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSettingsState } from "../../types/@types.playthrough";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettingsState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
      switch (state.difficulty) {
        case "easy":
          state.numOfMistakes = 10;
        case "medium":
          state.numOfMistakes = 8;
        case "hard":
          state.numOfMistakes = 6;
      }
    },
    setNumberOfRounds: (state, action: PayloadAction<number>) => {
      state.numOfRounds = action.payload;
    },
  },
});
export const { setDifficulty, setNumberOfRounds } = settingsSlice.actions;

export default settingsSlice.reducer;
