import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {};
const baseUrl = "https://api.coingecko.com/api/v3";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => "/coins",
      //   createRequest("/exchanges"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
