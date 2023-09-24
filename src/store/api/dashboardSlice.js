import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
	reducerPath: "dashboard",
	baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: (id) => (id ? `products/${id}` : `products`),
		}),
	}),
});

export const { useGetProductsQuery } = dashboardApi;
