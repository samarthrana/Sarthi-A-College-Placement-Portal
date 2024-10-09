import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToApply,
  fetchCompaniesByCompId,
  fetchCompaniesByUserId,
} from "./appliedAPI";

const initialState = {
  comp: [],
  userApplied: [],
  status: "idle",
};

export const addToApplyAsync = createAsyncThunk(
  "apply/addToApply",
  async (cmpny) => {
    const response = await addToApply(cmpny);
    return response.data;
  }
);

export const fetchCompaniesByUserIdAsync = createAsyncThunk(
  "apply/fetchCompaniesByUserId",
  async (compId) => {
    const response = await fetchCompaniesByUserId(compId);
    return response.data;
  }
);

export const fetchCompaniesByCompIdAsync = createAsyncThunk(
  "apply/fetchCompaniesByCompId",
  async (userId) => {
    const response = await fetchCompaniesByCompId(userId);
    return response.data;
  }
);

export const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToApplyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToApplyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comp.unshift(action.payload);
      })
      .addCase(fetchCompaniesByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompaniesByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.comp = action.payload;
      })
      .addCase(fetchCompaniesByCompIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompaniesByCompIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userApplied = action.payload;
      });
  },
});

export const { increment } = applySlice.actions;
export const selectCompany = (state) => state.apply.comp;
export const selectUserApplied = (state) => state.apply.userApplied;

export default applySlice.reducer;
