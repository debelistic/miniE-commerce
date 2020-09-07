import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import logger from "redux-logger"
import storage from "redux-persist/lib/storage"

const initialState = {
  cart: [],
}

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
}

function reducer(state = initialState, action) {
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

const pReducer = persistReducer(persistConfig, reducer)

const middleware = applyMiddleware(thunk, logger)

export const store = createStore(pReducer, middleware)

persistStore(store)

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
