import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "./store"

export interface BasketState {
  products: Product[]
}

const initialState: BasketState = {
  products: [],
}

export const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload]
    },
    removeFromBasket: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload.id
      )

      let newBasket = [...state.products]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!`
        )
      }

      state.products = newBasket
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

// Selectors -> retrieving items in state to use in different components
export const selectBasketItems = (state: RootState) => state.basket.products

export const selectBasketItemsWithId = (id: string, state: RootState) => {
  state.basket.products.filter((product: Product) => product._id === id)
}

export const selectBasketTotal = (state: RootState) => {
  state.basket.products.reduce(
    (total: number, product: Product) => (total += product.price),
    0
  )
}

export default basketSlice.reducer
