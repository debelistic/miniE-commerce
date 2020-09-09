import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import logger from "redux-logger"
import storage from "redux-persist/lib/storage"

const initialState = {
  cart: [],
  total: 0,
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "total"],
}

function reducer(state = initialState, action) {
  if (action.type === "ADD_ITEM_TO_CART") {
    const addedItems = state.cart.find(
      (product) => product.id === action.payload.id
    )
    if (addedItems) {
      addedItems.quantity += 1
      return {
        ...state,
        total: state.total + addedItems.price,
      }
    }
    action.payload.quantity = 1
    const total = state.total + action.payload.price

    return {
      ...state,
      cart: [...state.cart, action.payload],
      total,
    }
  }
  if (action.type === "REMOVE_ITEM_FROM_CART") {
    const itemToRemove = state.cart.find(
      (item) => action.payload.id === item.id
    )
    const cart = state.cart.filter((item) => action.payload.id !== item.id)

    const total = state.total - itemToRemove.price * itemToRemove.quantity
    return {
      ...state,
      cart,
      total,
    }
  }
  if (action.type === "REMOVE_AN_ITEM") {
    const addedItem = state.cart.find((item) => item.id === action.payload.id)

    if (addedItem.quantity === 1) {
      const cart = state.cart.filter((item) => item.id !== action.payload.id)
      const total = state.total - addedItem.price
      return {
        ...state,
        cart,
        total,
      }
    }

    addedItem.quantity -= 1
    const total = state.total - addedItem.price
    return {
      ...state,
      cart: [...state.cart],
      total,
    }
  }
  if (action.type === "ADD_AN_ITEM") {
    const addedItem = state.cart.find((item) => item.id === action.payload.id)
    addedItem.quantity += 1
    const total = state.total + addedItem.price
    return {
      ...state,
      cart: [...state.cart],
      total,
    }
  }
  if (action.type === "RESET_CART") {
    return {
      ...state,
      cart: [],
      total: 0,
    }
  }
  return state
}

const pReducer = persistReducer(persistConfig, reducer)

const middleware = applyMiddleware(thunk, logger)

export const store = createStore(pReducer, middleware)

persistStore(store)

export const addToCart = (item) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  }
}

export const removeFromCart = (item) => ({
  type: "REMOVE_ITEM_FROM_CART",
  payload: item,
})

export const removeFromAnItem = (item) => ({
  type: "REMOVE_AN_ITEM",
  payload: item,
})

export const addToAnItem = (item) => ({
  type: "ADD_AN_ITEM",
  payload: item,
})

export const resetCart = () => ({
  type: "RESET_CART",
})
