import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import { dashboardApi } from "./api/dashboardSlice";
const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productReducer,
		[dashboardApi.reducerPath]: dashboardApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(dashboardApi.middleware),
});
export default store;
