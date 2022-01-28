import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/" }),
    endpoints: (builder) => ({
      getAllProducts: builder.query({
        query: () => `products`,
      }),
    }),
  });
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllProductsQuery } = productsApi;