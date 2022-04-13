import './reset.scss'
import './index.scss'
import ConverterHeader from "./components/header/header";
import CurrencyConverter from "./components/converter/converter";


const App = () => {

  return (
    <div>
      <ConverterHeader/>
      <CurrencyConverter/>
    </div>
  );
};

export default App;
