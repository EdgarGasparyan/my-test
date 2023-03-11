import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIKEY =
  "live_lugyITQ7b8Em4Rth2yJDlApCKKmSHdYW69rYR9ftb8Lr9YbXBxZMBrqlPzo23PXr";

export const getData = createAsyncThunk(
  "posts/fetchPosts",
  async ({ categoryid }: any) => {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryid}&api_key=${APIKEY}`
    );
    return response?.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    categoryid: 1,
    catData: [],
    status: "idle",
    error: "",
  },
  reducers: {
    getcategoryid: (state, action) => {
      state.categoryid = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.catData = action.payload;
        // if we want to add in our state -- concat or push state.catData.concat(action.payload)
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { getcategoryid } = counterSlice.actions;

export default counterSlice.reducer;