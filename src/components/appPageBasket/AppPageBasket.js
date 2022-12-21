import "./appPageBasket.scss";
import AppLogo from "../appLogo/AppLogo";
import AppBasketMain from "../appBasketMain/AppBasketMain";
import AppBasketEmpty from "../appBasketEmpty/AppBasketEmpty";
import {useState} from "react";

function AppPageBasket(props) {
    const [clearBasket, setBasket] = useState(false);


    function toggleBasket(){
        setBasket(!clearBasket)
    }

    return (
        <div className="appPageBasket">
            <AppLogo/>
            <div className="line"></div>
            {/*<AppBasketMain/>*/}
            {/*/!*<AppBasketEmpty/>*!/*/}
            {clearBasket ? <AppBasketEmpty/> : <AppBasketMain data={toggleBasket}/>}
        </div>
    );
}

export default AppPageBasket;