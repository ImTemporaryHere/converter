import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ICurrencyRatio} from "../../models/ICurrencyRatio";

interface IInitialState {
  firstCurrencySelectValue: ICurrencyRatio | null,
  firstCurrencyInputValue: number,
  secondCurrencySelectValue: ICurrencyRatio | null,
  secondCurrencyInputValue: number
}

const initialState: IInitialState = {
  firstCurrencySelectValue: {
    code: "UAH",
    value: 1
  },
  firstCurrencyInputValue: 1,
  secondCurrencySelectValue: null,
  secondCurrencyInputValue: 1

};

export const currenciesConverterSlice = createSlice({
  name: "currenciesConverter",
  initialState,
  reducers: {
    setFirstCurrencySelectValue: (state, action: PayloadAction<ICurrencyRatio>) => {
      state.firstCurrencySelectValue = action.payload;
    },
    setFirstCurrencyInputValue: (state, action: PayloadAction<number>) => {
      state.firstCurrencyInputValue = action.payload;
    },
    setSecondCurrencySelectValue: (state, action: PayloadAction<ICurrencyRatio>) => {
      state.secondCurrencySelectValue = action.payload;
    },
    setSecondCurrencyInputValue: (state, action: PayloadAction<number>) => {
      state.secondCurrencyInputValue = action.payload;
    }


  },
});

export default currenciesConverterSlice.reducer;
