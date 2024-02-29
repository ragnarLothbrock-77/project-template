import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { fetchGalleryData } from "./galleryDataFetch.async";
import { ICatAPIItem } from "@/store/models/models";
import { fetchOneItem } from "./galleryOneItemFetch.async";

type AppStatus = 'init' | 'loading' | 'error' | 'success';

export interface IGalleryState {
  items: ICatAPIItem[],
  posterImage: ICatAPIItem,
  posterId: number,
  status: AppStatus,
  galleryLength: number,
  isRepeated: boolean
}

const initialState: IGalleryState = {
  items: [],
  posterImage: null,
  status: 'init',
  galleryLength: null,
  posterId: 0,
  isRepeated: false
}


export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setGalleryLength: (state, action: PayloadAction<number>) => {
      state.galleryLength = action.payload;
    },
    showNextImage: (state) => {
      // if (state.posterId == state.galleryLength - 1) { // Часть для работы логики перехода к первой картинке в режеиме работы non infinite!
      //   // state.posterImage = state.items[0];
      //   // state.posterId = 0;
      // } else {
      state.posterImage = state.items[state.posterId + 1];
      state.posterId += 1;
      // }
    },
    showPreviousImage: (state) => {
      if (state.posterId == 0) {
        state.posterImage = state.items[state.galleryLength - 1];
        state.posterId = state.galleryLength - 1;
      } else {
        state.posterImage = state.items[state.posterId - 1];
        state.posterId -= 1;
      }
    },
    choseImageFromArray: (state, action: PayloadAction<string>) => {
      state.items.map((item, index) => {
        if (item.url === action.payload) {
          state.posterImage = item;
          state.posterId = index;
        }
      });
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGalleryData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGalleryData.fulfilled, (state, action: PayloadAction<ICatAPIItem[]>) => {
        state.items = action.payload;
        state.posterImage = state.items[0];
        state.status = 'success';
      })
      .addCase(fetchGalleryData.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchOneItem.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(fetchOneItem.fulfilled, (state, action: PayloadAction<ICatAPIItem>) => {
        state.items.forEach(item => { // Проверка на повторющиеся изображения
          if (item.id === action.payload.id) {
            return state.isRepeated = true;
          };
        })
        state.items = state.items.concat(action.payload);
        state.galleryLength += 1;
        state.status = 'success';
      })
  }
})


export const { reducer: galleryReducer, actions: galleryActions } = gallerySlice;