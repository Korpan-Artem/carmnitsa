// src/store/slices/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../../api/products';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const res = await getProducts();
    return res.data;
  }
);

const productsSlice = createSlice({
  name        : 'products',
  initialState: {
    items  : [],
    loading: false,
    error  : null,
  },
  reducers     : {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
