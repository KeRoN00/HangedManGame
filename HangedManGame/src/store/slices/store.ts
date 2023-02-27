import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "./keyboard-slice";
import playthroughReducer from "./playthrough-slice";
import settingsReducer from "./settings-slice";

export const store = configureStore({
    reducer: {
        keyboard: keyboardReducer,
        playthrough: playthroughReducer,
        settings: settingsReducer,
        
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


