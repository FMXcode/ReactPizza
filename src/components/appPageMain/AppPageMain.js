import './appPageMain.scss';
import AppHeader from "../appHeader/AppHeader";
import AppMenu from "../appMenu/AppMenu";
import AppMain from "../appMain/AppMain";

function AppPageMain(props) {
    return (
        <div className="appPageMain">
            <AppHeader/>
            <div className="lineP"></div>
            <AppMenu/>
            <h1>Все пиццы</h1>
            <AppMain/>
        </div>
    );
}

export default AppPageMain;