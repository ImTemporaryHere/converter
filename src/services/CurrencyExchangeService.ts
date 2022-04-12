import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICurrencyRatio } from "../models/ICurrencyRatio";

const apiUrl = process.env.REACT_APP_BASE_API_URL;
const apiKey = process.env.REACT_APP_BASE_API_KEY;

interface IFetchAllCurrenciesResponse {
  meta: {
    last_updated_at: string;
  };
  data: { [key: string]: ICurrencyRatio };
}

export const currencyExchangeApi = createApi({
  reducerPath: "currencyExchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (build) => ({
    fetchAllCurrencies: build.query<
      IFetchAllCurrenciesResponse["data"],
      { baseCurrency: string }
    >({
      query: ({ baseCurrency }) => ({
        url: "/latest",
        params: {
          //apikey: apiKey,
          base_currency: baseCurrency,
        },
      }),
      transformResponse: (response: IFetchAllCurrenciesResponse, meta, arg) => response.data
    }),
  }),
});
