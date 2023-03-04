import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import { initialModalOptions } from '../../types/@types.modal';

export const modalSlice = createSlice({
name: 'modal', 
initialState: initialModalOptions,
reducers: {
    openModal: (state, action: PayloadAction<string>) => {
        state.content = action.payload;
        state.isModalOpen = true;
    },
    closeModal: (state) => {
        state.isModalOpen = false;
    },
    changeContent: (state, action: PayloadAction<string>) => {
        state.content = action.payload;
    },
}
})
export const {openModal, closeModal, changeContent} = modalSlice.actions

export default modalSlice.reducer;