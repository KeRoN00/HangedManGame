import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialSettingsState } from '../../@types.game'

export const settingsSlice = createSlice({
name: 'settings', 
initialState: initialSettingsState,
reducers: {
    setDifficulty: (state, action: PayloadAction<string>) => {
        state.difficulty = action.payload;
    },
    setNumberOfRounds: (state, action: PayloadAction<number>) => {
        state.numOfRounds = action.payload;
    }
}
})
export const {setDifficulty, setNumberOfRounds} = settingsSlice.actions

export default settingsSlice.reducer;