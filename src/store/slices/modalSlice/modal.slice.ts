import { createSlice } from "@reduxjs/toolkit";

export interface IModalState {
  opened: boolean
}

export const initialState: IModalState = {
  opened: false
}

export const modalSLice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModalState: (state) => {
      state.opened = !state.opened
    }
  }
})

export const { reducer: modalReducer, actions: modalActions } = modalSLice;