import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ICurrencyRatio} from "../../models/ICurrencyRatio";

interface IInitialState {
  firstCurrencySelectValue: ICurrencyRatio,
  firstCurrencyInputValue: string,
  secondCurrencySelectValue: ICurrencyRatio | null,
  secondCurrencyInputValue: string
}

const initialState: IInitialState = {
  firstCurrencySelectValue: {
    code: "UAH",
    value: 1
  },
  firstCurrencyInputValue: '100',
  secondCurrencySelectValue: null,
  secondCurrencyInputValue: '1'

};

export const currenciesConverterSlice = createSlice({
  name: "currenciesConverter",
  initialState,
  reducers: {
    setFirstCurrencySelectValue: (state, action: PayloadAction<ICurrencyRatio>) => {
      state.firstCurrencySelectValue = action.payload;
    },
    setFirstCurrencyInputValue: (state, action: PayloadAction<string>) => {
      state.firstCurrencyInputValue = action.payload;
    },
    setSecondCurrencySelectValue: (state, action: PayloadAction<ICurrencyRatio>) => {
      state.secondCurrencySelectValue = action.payload;
    },
    setSecondCurrencyInputValue: (state, action: PayloadAction<string>) => {
      state.secondCurrencyInputValue = action.payload;
    },
    handleReverseConversation: (state, action: PayloadAction<void>) => {
      const firstCurrency = JSON.parse(JSON.stringify({
        firstCurrencyInputValue: state.firstCurrencyInputValue,
        firstCurrencySelectValue:  state.firstCurrencySelectValue
      }))

      state.firstCurrencySelectValue = state.secondCurrencySelectValue as ICurrencyRatio;
      state.firstCurrencyInputValue = state.secondCurrencyInputValue;

      state.secondCurrencySelectValue = firstCurrency.firstCurrencySelectValue;
      state.secondCurrencyInputValue = firstCurrency.firstCurrencyInputValue

    }


  },
});

export default currenciesConverterSlice.reducer;
