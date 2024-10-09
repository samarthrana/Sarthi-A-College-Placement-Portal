import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createCompany,
  fetchAllCompanies,
  fetchCompanyById,
  updateCompany,
} from "./companyAPI";

const initialState = {
  companies: [],
  selectedCompany: null,
  status: "idle",
};

export const fetchAllCompaniesAsync = createAsyncThunk(
  "company/fetchAllCompanies",
  async () => {
    const response = await fetchAllCompanies();
    return response.data;
  }
);

export const fetchCompanyByIdAsync = createAsyncThunk(
  "company/fetchCompanyById",
  async (id) => {
    const response = await fetchCompanyById(id);
    return response.data;
  }
);

export const createCompanyAsync = createAsyncThunk(
  "company/createCompany",
  async (company) => {
    const response = await createCompany(company);
    return response.data;
  }
);

export const updateCompanyAsync = createAsyncThunk(
  "company/updateCompany",
  async (update) => {
    const response = await updateCompany(update);
    return response.data;
  }
);

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    clearSelectedCompany: (state) => {
      state.selectedCompany = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCompaniesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCompaniesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies = action.payload;
      })
      .addCase(fetchCompanyByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCompanyByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedCompany = action.payload;
      })
      .addCase(createCompanyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCompanyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.companies.unshift(action.payload);
      })
      .addCase(updateCompanyAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCompanyAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.companies.findIndex(
          (company) => company.id === action.payload.id
        );
        state.companies[index] = action.payload;
      });
  },
});

export const { clearSelectedCompany } = companySlice.actions;

export const selectAllCompanies = (state) => state.company.companies;
export const selectedCompanyById = (state) => state.company.selectedCompany;

export default companySlice.reducer;
