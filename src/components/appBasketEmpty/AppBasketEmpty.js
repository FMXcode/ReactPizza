import "./appBasketEmpty.scss";
import shopping from "../../resourse/img/appBasketMain/shopping-cart-colour 1.png"
import {Link} from "react-router-dom";

function AppBasketEmpty(props) {
    return (
        <div className="appBasketEmpty">
                <h2>Корзина пустая 😕</h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу. <br/>
                Для того, чтобы заказать пиццу, перейди на
                главную страницу.</p>
            <img src={shopping} alt="basket"/>
            <Link to="/">Вернуться назад</Link>
        </div>
    );
}

export default AppBasketEmpty;