import './App.scss';
import AppPageMain from "../appPageMain/AppPageMain";
import AppPageBasket from "../appPageBasket/AppPageBasket";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<AppPageMain/>}/>
            <Route path="Basket" element={<AppPageBasket/>}/>
        </Routes>


    </div>
  );
}

export default App;
