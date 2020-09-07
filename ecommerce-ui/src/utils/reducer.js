import { createStore } from "redux"

const initialState = {
  cart: [],
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case "REMOVE_ITEM_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}

export const store = createStore(reducer, initialState)

export const addToCart = (item) => {
  // item.count = 0
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  }
}

export const removeFromCart = (item) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: item,
})
