import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	status: "idle",
};

const productSlice = createSlice({
	name: "products",
	initialState: initialState,
	// reducers: {
	// 	fetchProducts(state, action) {
	// 		state.data = action.payload;
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(getProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = "success";
			})
			.addCase(getProducts.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(getProducts.rejected, (state, action) => {
				state.status = "error";
			});
	},
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
	const response = await fetch("https://fakestoreapi.com/products");
	const data = await response.json();
	return data;
});

// export function getProducts() {
// 	return async function getProductsThunk(dispatch, getState) {
// 		const response = await fetch("https://fakestoreapi.com/products");
// 		const data = await response.json();
// 		dispatch(fetchProducts(data));
// 	};
// }
