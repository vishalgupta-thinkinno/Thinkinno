
import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name : 'thinkinnoImage',
  initialState : [],
  reducers : {
    addInitialImages : (state, action) => {
      return [...state, action.payload];
    }
  }
});

export const imageActions = imageSlice.actions;
export default imageSlice;

