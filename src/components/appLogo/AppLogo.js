import "./appLogo.scss";
import logo from '../../resourse/img/appMain/image 1 (2).png'
function AppLogo(props) {
    return (
        <div className="appLogo">
            <img src={logo} alt=""/>
            <div className="textLogo">
                <h2>REACT PIZZA</h2>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
    );
}

export default AppLogo;