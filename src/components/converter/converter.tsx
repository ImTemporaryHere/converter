import React, {ChangeEvent, useEffect} from 'react';
import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent
} from "@mui/material";
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import {currencyExchangeApi} from "../../services/CurrencyExchangeService";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {currenciesConverterSlice} from "../../store/reducers/currenciesConverterSlice";
import {ICurrencyRatio} from "../../models/ICurrencyRatio";





const CurrencyConverter = () => {

  const { data={

    // "AED": {
    //   "code": "AED",
    //   "value": 0.124818
    // },
    // "AFN": {
    //   "code": "AFN",
    //   "value": 3.007378
    // },
    // "ALL": {
    //   "code": "ALL",
    //   "value": 3.782158
    // },
    // "AMD": {
    //   "code": "AMD",
    //   "value": 16.135917
    // },
    // "ANG": {
    //   "code": "ANG",
    //   "value": 0.061299
    // },
    // "AOA": {
    //   "code": "AOA",
    //   "value": 14.907224
    // },
    // "ARS": {
    //   "code": "ARS",
    //   "value": 3.824154
    // },
    // "AUD": {
    //   "code": "AUD",
    //   "value": 0.045829
    // },
    // "AWG": {
    //   "code": "AWG",
    //   "value": 0.061167
    // },
    // "AZN": {
    //   "code": "AZN",
    //   "value": 0.057769
    // },
    // "BAM": {
    //   "code": "BAM",
    //   "value": 0.060961
    // },
    // "BBD": {
    //   "code": "BBD",
    //   "value": 0.068677
    // },
    // "BDT": {
    //   "code": "BDT",
    //   "value": 2.932757
    // },
    // "BGN": {
    //   "code": "BGN",
    //   "value": 0.061041
    // },
    // "BHD": {
    //   "code": "BHD",
    //   "value": 0.012812
    // },
    // "BIF": {
    //   "code": "BIF",
    //   "value": 68.302915
    // },
    // "BMD": {
    //   "code": "BMD",
    //   "value": 0.033982
    // },
    // "BND": {
    //   "code": "BND",
    //   "value": 0.046391
    // },
    // "BOB": {
    //   "code": "BOB",
    //   "value": 0.233836
    // },
    // "BRL": {
    //   "code": "BRL",
    //   "value": 0.159549
    // },
    // "BSD": {
    //   "code": "BSD",
    //   "value": 0.034014
    // },
    // "BTC": {
    //   "code": "BTC",
    //   "value": 241.027526
    // },
    // "BTN": {
    //   "code": "BTN",
    //   "value": 2.583796
    // },
    // "BWP": {
    //   "code": "BWP",
    //   "value": 0.391631
    // },
    // "BYN": {
    //   "code": "BYN",
    //   "value": 0.112706
    // },
    // "BYR": {
    //   "code": "BYR",
    //   "value": 666.029861
    // },
    // "BZD": {
    //   "code": "BZD",
    //   "value": 0.068561
    // },
    // "CAD": {
    //   "code": "CAD",
    //   "value": 0.042956
    // },
    // "CDF": {
    //   "code": "CDF",
    //   "value": 68.321026
    // },
    // "CHF": {
    //   "code": "CHF",
    //   "value": 0.031654
    // },
    // "CLF": {
    //   "code": "CLF",
    //   "value": 0.001007
    // },
    // "CLP": {
    //   "code": "CLP",
    //   "value": 27.771754
    // },
    // "CNY": {
    //   "code": "CNY",
    //   "value": 0.216454
    // },
    // "COP": {
    //   "code": "COP",
    //   "value": 127.183618
    // },
    // "CRC": {
    //   "code": "CRC",
    //   "value": 22.30331
    // },
    // "CUC": {
    //   "code": "CUC",
    //   "value": 0.03415
    // },
    // "CUP": {
    //   "code": "CUP",
    //   "value": 0.816311
    // },
    // "CVE": {
    //   "code": "CVE",
    //   "value": 3.453408
    // },
    // "CZK": {
    //   "code": "CZK",
    //   "value": 0.763534
    // },
    // "DJF": {
    //   "code": "DJF",
    //   "value": 6.039263
    // },
    // "DKK": {
    //   "code": "DKK",
    //   "value": 0.232308
    // },
    // "DOP": {
    //   "code": "DOP",
    //   "value": 1.871532
    // },
    // "DZD": {
    //   "code": "DZD",
    //   "value": 4.870794
    // },
    // "EGP": {
    //   "code": "EGP",
    //   "value": 0.626604
    // },
    // "ETB": {
    //   "code": "ETB",
    //   "value": 1.738179
    // },
    "EUR": {
      "code": "EUR",
      "value": 0.03124
    },
    // "FJD": {
    //   "code": "FJD",
    //   "value": 0.071604
    // },
    "GBP": {
      "code": "GBP",
      "value": 0.026094
    },
    // "GEL": {
    //   "code": "GEL",
    //   "value": 0.104324
    // },
    // "GHS": {
    //   "code": "GHS",
    //   "value": 0.253163
    // },
    // "GMD": {
    //   "code": "GMD",
    //   "value": 1.833309
    // },
    // "GNF": {
    //   "code": "GNF",
    //   "value": 302.933138
    // },
    // "GTQ": {
    //   "code": "GTQ",
    //   "value": 0.261048
    // },
    // "GYD": {
    //   "code": "GYD",
    //   "value": 7.115967
    // },
    // "HKD": {
    //   "code": "HKD",
    //   "value": 0.266347
    // },
    // "HNL": {
    //   "code": "HNL",
    //   "value": 0.830178
    // },
    // "HRK": {
    //   "code": "HRK",
    //   "value": 0.235912
    // },
    // "HTG": {
    //   "code": "HTG",
    //   "value": 3.724404
    // },
    // "HUF": {
    //   "code": "HUF",
    //   "value": 11.829143
    // },
    // "IDR": {
    //   "code": "IDR",
    //   "value": 488.000071
    // },
    // "ILS": {
    //   "code": "ILS",
    //   "value": 0.109122
    // },
    // "INR": {
    //   "code": "INR",
    //   "value": 2.57711
    // },
    // "IQD": {
    //   "code": "IQD",
    //   "value": 49.613077
    // },
    // "IRR": {
    //   "code": "IRR",
    //   "value": 1437.419824
    // },
    // "ISK": {
    //   "code": "ISK",
    //   "value": 4.360562
    // },
    // "JMD": {
    //   "code": "JMD",
    //   "value": 5.252103
    // },
    // "JOD": {
    //   "code": "JOD",
    //   "value": 0.024117
    // },
    // "JPY": {
    //   "code": "JPY",
    //   "value": 4.263694
    // },
    // "KES": {
    //   "code": "KES",
    //   "value": 3.919775
    // },
    // "KGS": {
    //   "code": "KGS",
    //   "value": 2.927275
    // },
    // "KHR": {
    //   "code": "KHR",
    //   "value": 137.625847
    // },
    // "KMF": {
    //   "code": "KMF",
    //   "value": 15.364795
    // },
    // "KRW": {
    //   "code": "KRW",
    //   "value": 41.97377
    // },
    // "KWD": {
    //   "code": "KWD",
    //   "value": 0.010363
    // },
    // "KYD": {
    //   "code": "KYD",
    //   "value": 0.028341
    // },
    // "KZT": {
    //   "code": "KZT",
    //   "value": 15.328093
    // },
    // "LAK": {
    //   "code": "LAK",
    //   "value": 403.707032
    // },
    // "LBP": {
    //   "code": "LBP",
    //   "value": 51.550445
    // },
    // "LKR": {
    //   "code": "LKR",
    //   "value": 10.883742
    // },
    // "LRD": {
    //   "code": "LRD",
    //   "value": 5.178792
    // },
    // "LSL": {
    //   "code": "LSL",
    //   "value": 0.495115
    // },
    // "LTL": {
    //   "code": "LTL",
    //   "value": 0.100337
    // },
    // "LVL": {
    //   "code": "LVL",
    //   "value": 0.020555
    // },
    // "LYD": {
    //   "code": "LYD",
    //   "value": 0.159545
    // },
    // "MAD": {
    //   "code": "MAD",
    //   "value": 0.332799
    // },
    // "MDL": {
    //   "code": "MDL",
    //   "value": 0.62635
    // },
    // "MGA": {
    //   "code": "MGA",
    //   "value": 136.098231
    // },
    // "MKD": {
    //   "code": "MKD",
    //   "value": 1.923481
    // },
    // "MMK": {
    //   "code": "MMK",
    //   "value": 62.975037
    // },
    // "MOP": {
    //   "code": "MOP",
    //   "value": 0.274613
    // },
    // "MRO": {
    //   "code": "MRO",
    //   "value": 12.131252
    // },
    // "MUR": {
    //   "code": "MUR",
    //   "value": 1.476422
    // },
    // "MVR": {
    //   "code": "MVR",
    //   "value": 0.525358
    // },
    // "MWK": {
    //   "code": "MWK",
    //   "value": 27.542394
    // },
    // "MXN": {
    //   "code": "MXN",
    //   "value": 0.677732
    // },
    // "MYR": {
    //   "code": "MYR",
    //   "value": 0.14376
    // },
    // "MZN": {
    //   "code": "MZN",
    //   "value": 2.169051
    // },
    // "NAD": {
    //   "code": "NAD",
    //   "value": 0.495119
    // },
    // "NGN": {
    //   "code": "NGN",
    //   "value": 14.123447
    // },
    // "NIO": {
    //   "code": "NIO",
    //   "value": 1.214853
    // },
    // "NOK": {
    //   "code": "NOK",
    //   "value": 0.299823
    // },
    // "NPR": {
    //   "code": "NPR",
    //   "value": 4.134128
    // },
    // "NZD": {
    //   "code": "NZD",
    //   "value": 0.049848
    // },
    // "OMR": {
    //   "code": "OMR",
    //   "value": 0.013083
    // },
    // "PAB": {
    //   "code": "PAB",
    //   "value": 0.034011
    // },
    // "PEN": {
    //   "code": "PEN",
    //   "value": 0.126242
    // },
    // "PGK": {
    //   "code": "PGK",
    //   "value": 0.119445
    // },
    // "PHP": {
    //   "code": "PHP",
    //   "value": 1.775879
    // },
    // "PKR": {
    //   "code": "PKR",
    //   "value": 6.215289
    // },
    // "PLN": {
    //   "code": "PLN",
    //   "value": 0.145677
    // },
    // "PYG": {
    //   "code": "PYG",
    //   "value": 232.200556
    // },
    // "QAR": {
    //   "code": "QAR",
    //   "value": 0.123728
    // },
    // "RON": {
    //   "code": "RON",
    //   "value": 0.154332
    // },
    // "RSD": {
    //   "code": "RSD",
    //   "value": 3.677819
    // },
    // "RUB": {
    //   "code": "RUB",
    //   "value": 2.837458
    // },
    // "RWF": {
    //   "code": "RWF",
    //   "value": 34.729548
    // },
    // "SAR": {
    //   "code": "SAR",
    //   "value": 0.127439
    // },
    // "SBD": {
    //   "code": "SBD",
    //   "value": 0.271858
    // },
    // "SCR": {
    //   "code": "SCR",
    //   "value": 0.489834
    // },
    // "SDG": {
    //   "code": "SDG",
    //   "value": 15.206836
    // },
    // "SEK": {
    //   "code": "SEK",
    //   "value": 0.323214
    // },
    // "SGD": {
    //   "code": "SGD",
    //   "value": 0.046407
    // },
    // "SHP": {
    //   "code": "SHP",
    //   "value": 0.046806
    // },
    // "SLL": {
    //   "code": "SLL",
    //   "value": 412.875003
    // },
    // "SOS": {
    //   "code": "SOS",
    //   "value": 19.675502
    // },
    // "SRD": {
    //   "code": "SRD",
    //   "value": 0.701905
    // },
    // "STD": {
    //   "code": "STD",
    //   "value": 703.34048
    // },
    // "SVC": {
    //   "code": "SVC",
    //   "value": 0.297592
    // },
    // "SZL": {
    //   "code": "SZL",
    //   "value": 0.495119
    // },
    // "THB": {
    //   "code": "THB",
    //   "value": 1.143478
    // },
    // "TJS": {
    //   "code": "TJS",
    //   "value": 0.425336
    // },
    // "TMT": {
    //   "code": "TMT",
    //   "value": 0.119275
    // },
    // "TND": {
    //   "code": "TND",
    //   "value": 0.101146
    // },
    // "TOP": {
    //   "code": "TOP",
    //   "value": 0.076839
    // },
    // "TRY": {
    //   "code": "TRY",
    //   "value": 0.498387
    // },
    // "TTD": {
    //   "code": "TTD",
    //   "value": 0.230989
    // },
    // "TWD": {
    //   "code": "TWD",
    //   "value": 0.987529
    // },
    // "TZS": {
    //   "code": "TZS",
    //   "value": 78.906359
    // },
    "UAH": {
      "code": "UAH",
      "value": 1
    },
    // "UGX": {
    //   "code": "UGX",
    //   "value": 120.236922
    // },
    "USD": {
      "code": "USD",
      "value": 0.033981
    },
    // "UYU": {
    //   "code": "UYU",
    //   "value": 1.431083
    // },
    // "UZS": {
    //   "code": "UZS",
    //   "value": 385.350052
    // },
    // "VND": {
    //   "code": "VND",
    //   "value": 776.890847
    // },
    // "XAF": {
    //   "code": "XAF",
    //   "value": 20.445378
    // },
    // "XCD": {
    //   "code": "XCD",
    //   "value": 0.091838
    // },
    // "XDR": {
    //   "code": "XDR",
    //   "value": 0.024804
    // },
    // "XOF": {
    //   "code": "XOF",
    //   "value": 20.440213
    // },
    // "XPF": {
    //   "code": "XPF",
    //   "value": 3.734604
    // },
    // "YER": {
    //   "code": "YER",
    //   "value": 8.50654
    // },
    // "ZAR": {
    //   "code": "ZAR",
    //   "value": 0.49588
    // },
    // "ZMK": {
    //   "code": "ZMK",
    //   "value": 305.870815
    // },
    // "ZMW": {
    //   "code": "ZMW",
    //   "value": 0.595237
    // },
    // "ZWL": {
    //   "code": "ZWL",
    //   "value": 10.941905
    // }
    },error,isLoading } = currencyExchangeApi.useFetchAllCurrenciesQuery({baseCurrency: 'UAH'})

  const {
    firstCurrencyInputValue,
    firstCurrencySelectValue,
    secondCurrencyInputValue,
    secondCurrencySelectValue
  } = useAppSelector(state=>state.currenciesConverterSlice);

  const {
    setFirstCurrencyInputValue,
    setFirstCurrencySelectValue,
    setSecondCurrencyInputValue,
    setSecondCurrencySelectValue,
    handleReverseConversation
  } = currenciesConverterSlice.actions;

  const dispatch = useAppDispatch();


  const handleChangeFirstCurrencyInput = (inputValue: string): void => {


    if(
      inputValue.match(/^[+-]?(?:\d+|\d{1,3}(?:,\d{3})*)(?:\.\d*)?$/gm)
      ||
      inputValue.length === 0
    ) {

      const inputValueNumber =  parseFloat(inputValue) || 0;

      const secondSelectValue = firstCurrencySelectValue?.code==='UAH' ?
        (secondCurrencySelectValue as ICurrencyRatio).value
        :
        (secondCurrencySelectValue as ICurrencyRatio).value / firstCurrencySelectValue.value


      dispatch(setFirstCurrencyInputValue(inputValue))

      dispatch(setSecondCurrencyInputValue((secondSelectValue *  inputValueNumber).toString() ))

    }

  }

  const handleChangeSecondCurrencyInput = (inputValue: string): void => {


    if(
      inputValue.match(/^[+-]?(?:\d+|\d{1,3}(?:,\d{3})*)(?:\.\d*)?$/gm)
      ||
      inputValue.length === 0
    ) {

      const inputValueNumber =  parseFloat(inputValue) || 0;

      const firstSelectValue = firstCurrencySelectValue?.code==='UAH' ?
        (secondCurrencySelectValue as ICurrencyRatio).value
        :
        (secondCurrencySelectValue as ICurrencyRatio).value / firstCurrencySelectValue.value


      dispatch(setSecondCurrencyInputValue(inputValue))

      dispatch(setFirstCurrencyInputValue((inputValueNumber / firstSelectValue).toString() ))

    }

  }



  const handleChangeFirstSelect = (event: SelectChangeEvent) => {
    if(data) {
      dispatch(setFirstCurrencySelectValue(data[event.target.value]));
    }

  };

  const handleChangeSecondSelect = (event: SelectChangeEvent) => {
    if(data) {
      dispatch(setSecondCurrencySelectValue(data[event.target.value]))
    }

  };


  const handleReverseValues = ()=>{
    dispatch(handleReverseConversation())
  }


  useEffect(()=>{
    if(data && secondCurrencySelectValue){
      handleChangeFirstCurrencyInput(firstCurrencyInputValue);
    }
  },[firstCurrencySelectValue])


  useEffect(()=>{
    if(data && firstCurrencySelectValue && secondCurrencySelectValue){
      handleChangeSecondCurrencyInput(secondCurrencyInputValue);
    }
  },[secondCurrencySelectValue])



  useEffect(()=>{
    if(data && !secondCurrencySelectValue) {
      dispatch(setSecondCurrencySelectValue(data['USD']));
      dispatch(setSecondCurrencyInputValue((data['USD'].value *  parseFloat(firstCurrencyInputValue)).toString() ))
    }

  },[data])






  return (
    <Grid sx={{minHeight: '500px'}} alignItems={'center'} justifyContent={'center'} spacing={2} container>
      <Grid sx={{gap: '20px'}} container  item md={3}>
        <FormControl >
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            style={{width: '150px'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={firstCurrencySelectValue ? firstCurrencySelectValue.code : 'UAH'}
            label="chose currency"
            onChange={handleChangeFirstSelect}
          >
            {
              data ?

              Object.values(data).map((currencyData)=>(
                <MenuItem key={currencyData.code} value={currencyData.code}>{currencyData.code}</MenuItem>
              ))
                :
                <MenuItem value={'UAH'}>UAH</MenuItem>
            }
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-outlined">how much</InputLabel>
          <OutlinedInput
            sx={{width: '150px'}}
            id="component-outlined"
            value={firstCurrencyInputValue}
            onChange={(e)=>{handleChangeFirstCurrencyInput(e.target.value)}}
            label="Name"
          />
        </FormControl>

      </Grid>

      <Grid container item md={1} alignItems={'center'} justifyContent={'center'}>
        <IconButton  onClick={handleReverseValues}  color="primary" aria-label="reverse values">
          <FlipCameraAndroidIcon  />
        </IconButton>
      </Grid>

      <Grid sx={{gap: '20px'}} container item md={3} justifyContent={'flex-end'}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Currency</InputLabel>
          <Select
            style={{width: '150px'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={secondCurrencySelectValue ? secondCurrencySelectValue.code : 'USD'}
            label="chose currency"
            onChange={handleChangeSecondSelect}
          >
            {
              data ?

                Object.values(data).map((currencyData)=>(
                  <MenuItem key={currencyData.code} value={currencyData.code}>{currencyData.code}</MenuItem>
                ))
                :
                <MenuItem value={'USD'}>USD</MenuItem>
            }
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel htmlFor="component-outlined">how much</InputLabel>
          <OutlinedInput
            sx={{width: '150px'}}
            id="component-outlined"
            value={secondCurrencyInputValue}
            onChange={(e)=>{
              handleChangeSecondCurrencyInput(e.target.value)
            }}
            label="Name"
          />
        </FormControl>
      </Grid>

    </Grid>
  );
};

export default CurrencyConverter;
