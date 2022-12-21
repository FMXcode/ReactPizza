import "./appBasketMain.scss";

import AppBasket from "../appBasket/AppBasket";
import AppBasketCard from "../appBasketCard/AppBasketCard";
import pizzaBasketCard from "../../resourse/img/appBasketMain/pizzaBasketCard.png"
import pizzaBasketCard1 from "../../resourse/img/appBasketMain/pizzaBasketCard1.png"
import pizzaBasketCard2 from "../../resourse/img/appBasketMain/pizzaBasketCard2.png"
import AppBasketControl from "../appBasketСontrol/AppBasketControl";


function AppBasketMain({data}) {
    const dataBasketCard = [{itemCards: pizzaBasketCard, name: "Сырный цыпленок",title: "тонкое тесто, 26 см.", count: 2, price: 770},
                            {itemCards: pizzaBasketCard1, name: "Креветки по-азиатски", title: "толстое тесто, 40 см.", count: 2, price: 290},
                            {itemCards: pizzaBasketCard2, name: "Чизбургер-пицца", title: "тонкое тесто, 30 см.", count: 1, price: 350}]

    const elements = dataBasketCard.map((item, i) =>{
        return <AppBasketCard
            itemCards={dataBasketCard[i].itemCards}
            name={dataBasketCard[i].name}
            title={dataBasketCard[i].title}
            count={dataBasketCard[i].count}
            price={dataBasketCard[i].price}/>
    })
    return (
        <div className="appBasketMain">
            <AppBasket toggleBasket={data}/>
            {elements}
            <AppBasketControl/>
        </div>
    );
}

export default AppBasketMain;