import './reset.scss'
import './index.scss'
import {currencyExchangeApi} from "./services/CurrencyExchangeService";


const App = () => {

  const { data,error,isLoading, } = currencyExchangeApi.useFetchAllCurrenciesQuery({baseCurrency: 'UAH'})

  console.log(data)

  return (
    <div>
      {JSON.stringify(data || {
        "meta": {
          "last_updated_at": "2022-01-01T23:59:59Z"
        },
        "data": {
          "AED": {
            "code": "AED",
            "value": 3.67306
          },
          "AFN": {
            "code": "AFN",
            "value": 91.80254
          },
          "ALL": {
            "code": "ALL",
            "value": 108.22904
          },
          "AMD": {
            "code": "AMD",
            "value": 480.41659
          }
        }
      })}
    </div>
  );
};

export default App;
