import { configureStore, createReducer } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/userSlice";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/serviceAuth";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        shop: shopReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store