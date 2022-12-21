import "./appBasketControl.scss";
import next from "../../resourse/img/appBasketMain/next.svg"
import {Link} from "react-router-dom";
function AppBasketControl(props) {
    return (
        <div className="appBasketControl">
                <div className="pizzaTotal">
                <p>Всего пицц: <span>5 шт.</span></p>
                <Link to="/">
                    <img src={next} alt=""/>
                    Вернуться назад
                </Link>
            </div>
            <div className="pizzaSum">
                <p>Сумма заказа: <span>900 ₽</span> </p>
                <a href="#">Оплатить сейчас</a>
            </div>
        </div>
    );
}

export default AppBasketControl;