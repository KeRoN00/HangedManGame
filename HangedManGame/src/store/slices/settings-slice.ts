import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSettingsState } from "../../types/@types.settings";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettingsState,
  reducers: {
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
      switch (action.payload) {
        case "easy":
          state.numOfMistakes = 10;
          break;
        case "medium":
          state.numOfMistakes = 8;
          break;
        case "hard":
          state.numOfMistakes = 6;
          break;
        default: 
        state.numOfMistakes = 10;
      }
    },
    setNumberOfRounds: (state, action: PayloadAction<number>) => {
      state.numOfRounds = action.payload;
    },
  },
});
export const { setDifficulty, setNumberOfRounds } = settingsSlice.actions;

export default settingsSlice.reducer;
