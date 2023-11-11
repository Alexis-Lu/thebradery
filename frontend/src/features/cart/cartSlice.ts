import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

interface CardItem {
  id: number
  name: string
  price: number
  inventory: number
  quantity: number
}

interface CartState {
  items: CardItem[]
}

const datas = localStorage.getItem("cart")

const initialState: CartState = {
  items: datas ? JSON.parse(datas) : [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      )
      if (existingProduct) {
        if (existingProduct.inventory <= existingProduct.quantity) {
          toast.error("Plus de stock")
        } else {
          toast.success("Produit ajouté au panier")
          existingProduct.quantity++
        }
      } else {
        toast.success("Produit ajouté au panier")
        state.items.push({ ...action.payload, quantity: 1 })
      }
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
    resetCart: (state: any) => {
      state.items = []
      localStorage.removeItem("cart")
    },
    deleteOne: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload,
      )
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== action.payload)
        } else {
          existingProduct.quantity--
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
    deleteAll: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
  },
})

export default cartSlice.reducer
export const { addProductToCart, resetCart, deleteOne, deleteAll } =
  cartSlice.actions
