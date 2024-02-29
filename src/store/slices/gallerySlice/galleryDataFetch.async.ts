import { API_KEY } from "@/store/config/API";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGalleryData = createAsyncThunk(
  'gallery/fetchGalleryData',
  async (galleryLength: number, thunkAPI) => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${galleryLength}`, {
        headers: {
          'x-api-key': API_KEY
        }
      });
      const result = await response.json();
      console.log("Success:", result);
      return result;

    } catch (error) {
      return thunkAPI.rejectWithValue('Cand upload images!.Try again')
    }
  }
)