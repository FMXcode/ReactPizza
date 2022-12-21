import "./appMain.scss";
import AppCard from "../appCard/AppCard";
import photoCard1 from "../../resourse/img/appMain/pizzaCard1.png"
import photoCard2 from "../../resourse/img/appMain/pizzaCard2.png"
import photoCard3 from "../../resourse/img/appMain/pizzaCard3.png"
import photoCard4 from "../../resourse/img/appMain/pizzaCard4.png"


function AppMain(props) {
    const dataCards = [{name: "Чизбургер-пицца", photo: photoCard1},
                        {name: "Сырная", photo: photoCard2},
                        {name: "Креветки по-азиатски", photo: photoCard3},
                        {name: "Сырный цыпленок", photo: photoCard4},
                        {name: "Чизбургер-пицца", photo: photoCard1},
                        {name: "Сырная", photo: photoCard2},
                        {name: "Креветки по-азиатски", photo: photoCard3},
                        {name: "Сырный цыпленок", photo: photoCard4}]
    const elements = dataCards.map((item, i) => {
        return <AppCard
            name={dataCards[i].name}
            photo={dataCards[i].photo}
            />
    })
    return (
        <div className="appMain">
            {elements}

        </div>
    );
}

export default AppMain;