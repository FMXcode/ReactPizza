import "./appHeader.scss";
import AppLogo from "../appLogo/AppLogo";
import AppButtonBasket from "../appButtonBasket/AppButtonBasket";

function AppHeader() {
    return (
        <div className="appHeader">
            <AppLogo/>
            <AppButtonBasket/>
        </div>
    );
}

export default AppHeader;