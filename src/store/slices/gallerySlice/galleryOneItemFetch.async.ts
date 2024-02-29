import { API_KEY } from "@/store/config/API";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneItem = createAsyncThunk(
  'gallery/fetchOneItem',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search`, {
        headers: {
          'x-api-key': API_KEY
        }
      });
      const result = await response.json();
      console.log("Success:", result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue('Cant upload images! Try again')
    }
  }
)

// const fetchUserById = createAsyncThunk(
//   'users/fetchById',
//   // if you type your function argument here
//   async (userId: number) => {
//     const response = await fetch(`https://reqres.in/api/users/${userId}`)
//     return (await response.json()) as Returned
//   },
// )