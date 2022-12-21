import "./appBasket.scss";
import basket from "../../resourse/img/appBasketMain/Basket.svg";
import clearBasket from "../../resourse/img/appBasketMain/clearBasket.svg";

function AppBasket({toggleBasket}) {
    return (
        <div className="appBasket">
            <div className="basket">
                <img src={basket} alt=""/>
                <p className="basketText">Корзина</p>
            </div>
            <div className="clearBasket">
                <img src={clearBasket} alt=""/>
                <a className="clearBasketText" onClick={toggleBasket}>Очистить корзину</a>
            </div>
        </div>
    );
}

export default AppBasket;