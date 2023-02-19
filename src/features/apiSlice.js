// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => `/articles`,
    }),
    getArticlesById: builder.query({
      query: (id) => `/articles/${id}`,
    }),
  }),
});

export const { useGetArticlesByIdQuery, useGetArticlesQuery } = articlesApi;
