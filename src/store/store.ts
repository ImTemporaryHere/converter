import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currenciesConverterSlice from "./reducers/currenciesConverterSlice";
import { currencyExchangeApi } from "../services/CurrencyExchangeService";

const rootReducer = combineReducers({
  [currencyExchangeApi.reducerPath]: currencyExchangeApi.reducer,
  currenciesConverterSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(currencyExchangeApi.middleware),
  });

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType["dispatch"];
