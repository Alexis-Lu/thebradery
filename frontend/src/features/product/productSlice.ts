import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Requests from "../axiosRequest"

export interface Product {
  id?: number
  name: string
  price: number
  inventory: number
}

interface ProductState {
  items: Product[]
}

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await Requests("GET", "/api/products")
    return response
  },
)

const initialState: ProductState = {
  items: [],
}

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async (product: Product) => {
    const response = await Requests("POST", "/api/products", product)
    return response.data
  },
)

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id: number) => {
    const response = await Requests("GET", `/api/products/${id}`)
    return response.data
  },
)

export const putProduct = createAsyncThunk(
  "product/putProduct",
  async (product: Product) => {
    const response = await Requests(
      "PUT",
      `/api/products/${product.id}`,
      product,
    )
    return response.data
  },
)

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id: number) => {
    const response = await Requests("DELETE", `/api/products/${id}`)
    return response.data
  },
)

export const productSlice = createSlice({
  name: "product",
  initialState: initialState as ProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {})
    builder.addCase(getProduct.fulfilled, (state, action) => {})
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(putProduct.fulfilled, (state, action) => {})
    builder.addCase(deleteProduct.fulfilled, (state, action) => {})
  },
})

export default productSlice.reducer
