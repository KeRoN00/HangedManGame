import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialPlaythroughState } from '../../@types.game'


export const playthroughSlice = createSlice({
name: 'playthrough', 
initialState: initialPlaythroughState,
reducers: {
    toggleGameRunning: (state, action: PayloadAction<boolean>) => {
        state.isRunning = action.payload;
    },
    setNewWord: (state, action: PayloadAction<string>) =>{ 
        state.word = action.payload;
    }
}
})
export const {toggleGameRunning, setNewWord } = playthroughSlice.actions

export default playthroughSlice.reducer;