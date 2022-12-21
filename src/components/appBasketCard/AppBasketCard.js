import "./appBasketCard.scss";
import {Row, Col} from "react-bootstrap";
import close from "../../resourse/img/appBasketMain/close.svg"
import plus from "../../resourse/img/appBasketMain/plus.svg"
import minus from "../../resourse/img/appBasketMain/minus.svg"
import {useState} from "react";


function AppBasketCard({itemCards, name, title, price}) {

    const [countBasket, setCount] = useState(0);
    const [closeCard, setClose] = useState(false);

    const closeClass = closeCard ? " hidden" : "";

    function changeCount(i) {
        if (countBasket >= 0 && i === 1){
            setCount(countBasket + i)
        }else if (countBasket > 0) {
            setCount(countBasket + i)
        }
    }

    function closeCardBasket() {
        setClose(!closeCard)
    }



    return (
        <div className={"appBasketCard" + closeClass}>
            <div className="line"></div>
            <Row>
                <Col xs={6}>
                    <div className="product">
                        <Row>
                            <Col xs={3}>
                                <img src={itemCards} alt="pizza"/>
                            </Col>
                            <Col xs={7}>
                                <p className="productName">{name}</p>
                                <p className="productCharacteristic">{title}</p>
                            </Col>
                            <Col xs={3}>

                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={3}>
                    <div className="count">
                        <Row>
                            <Col xs={2} className="ColMinus" onClick={() => changeCount(-1)}>
                                <img src={minus} alt="minus"/>
                            </Col>
                            <Col xs={1}>
                                <p className="countValue">{countBasket}</p>
                            </Col>
                            <Col xs={3} onClick={() => changeCount(1)}>
                                <img src={plus} alt="plus"/>
                            </Col>
                            <Col xs={4}>

                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className="price">
                        <p>{price}₽</p>
                    </div>
                </Col>
                <Col>
                    <div className="close" onClick={closeCardBasket}>
                        <img src={close} alt="close"/>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AppBasketCard;