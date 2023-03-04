import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "./slices/keyboard-slice";
import playthroughReducer from "./slices/playthrough-slice";
import settingsReducer from "./slices/settings-slice";
import modalReducer from "./slices/modal-slice";
export const store = configureStore({
    reducer: {
        keyboard: keyboardReducer,
        playthrough: playthroughReducer,
        settings: settingsReducer,   
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


