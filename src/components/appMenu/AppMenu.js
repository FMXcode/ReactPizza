import './appMenu.scss'
import AppButtonMenu from "../appButtonMenu/AppButtonMenu";
import AppDropDown from "../appDropDown/AppDropDown";
import {useState} from "react";

function AppMenu(props) {
    const [activeTab, setTab] = useState(false)

    const activeTabBtn = activeTab ? "activeTabBtn" : " "

    const dataButton = [{name: "Все"}, {name: "Мясные"},
                        {name: "Вегетарианская"}, {name: "Гриль"},
                        {name: "Острые"}, {name: "Закрытые"}]


    console.log(dataButton[0].name)
    const elements = dataButton.map((item, i) => {
        return <AppButtonMenu key={i} name={dataButton[i].name}/>
    })
    return (
        <div className="appMenu">
            {elements}
            <p className="dropDownText"> &#x25bc; сортировать по:</p>
            <AppDropDown/>
        </div>
    );
}

export default AppMenu;