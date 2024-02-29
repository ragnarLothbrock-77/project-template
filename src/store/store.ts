import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modalSlice/modal.slice";
import { galleryReducer } from './slices/gallerySlice/gallery.slice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    gallery: galleryReducer
  }
});


export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;