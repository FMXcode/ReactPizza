import "./appButtonBasket.scss";
import basket from '../../resourse/img/appMain/Vector (1).svg'
import {Link} from "react-router-dom";

function AppButtonBasket(props) {
    return (
        <div className="appButtonBasket">
            <Link to="Basket">520 ₽</Link>
            <div className="line"></div>
            <img src={basket} alt="basket"/>
            <p>3</p>
        </div>
    );
}

export default AppButtonBasket;