import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { initialKeyBoardKeysState } from '../../types/@types.keyboard'

export const keyboardSlice = createSlice({
name: 'keyboard', 
initialState: initialKeyBoardKeysState,
reducers: {
    addKeyToArray: (state, action: PayloadAction<string>) => {
        state.keys = [...state.keys, action.payload];
    },
    resetKeyArray: (state) => {
        state.keys = [];
    }
}
})
export const {addKeyToArray, resetKeyArray} = keyboardSlice.actions

export default keyboardSlice.reducer;