import React from 'react';
import {Grid, Skeleton, Typography} from "@mui/material";
import {currencyExchangeApi} from "../../services/CurrencyExchangeService";

const headerStyles  = {
  padding: '20px 50px',
  backgroundColor: 'primary.light'
}

const ConverterHeader = () => {

  const { data,error,isLoading, } = currencyExchangeApi.useFetchAllCurrenciesQuery({baseCurrency: 'UAH'})

  const usdToUahValue = data ? (1 / data['USD'].value).toString().slice(0,5) : undefined;
  const eurToUahValue = data ? (1 / data['EUR'].value).toString().slice(0,5) : undefined;




  return (
    <Grid sx={headerStyles} container>
      <Grid md={4} container item>
        <Typography component={'h1'} variant={'h3'}>
          Currency Converter
        </Typography>
      </Grid>
      <Grid justifyContent={'space-evenly'} alignItems={'center'} md={4} container item>
        <Typography component={'h2'} variant={'h5'}>
          USD/UAH : {usdToUahValue || <Skeleton />}
        </Typography>

        <Typography component={'h2'} variant={'h5'}>
          EUR/UAH : {eurToUahValue || <Skeleton />}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ConverterHeader;
