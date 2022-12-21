import "./appCard.scss";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import plus from '../../resourse/img/appMain/plus.svg'
import {useState} from "react";
function AppCard({name, photo}) {
    const [indicatorOne, setIndicatorOne] = useState(false)
    const [indicatorTwo, setIndicatorTwo] = useState(false)
    const [indicatorSizeOne, setIndicatorSizeOne] = useState(false)
    const [indicatorSizeTwo, setIndicatorSizeTwo] = useState(false)
    const [indicatorSizeFree, setIndicatorSizeFree] = useState(false)
    const [amount, setAmount] = useState(0)

    const indicatorActiveOneBtn = indicatorOne ? " activeCard" : "";
    const indicatorActiveTwoBtn = indicatorTwo && !indicatorOne? " activeCard" : "";
    const indicatorActiveSizeOneBtn = indicatorSizeOne && !(indicatorSizeTwo || indicatorSizeFree)? " activeCard" : "";
    const indicatorActiveSizeTwoBtn = indicatorSizeTwo ? " activeCard" : "";
    const indicatorActiveSizeFreeBtn = indicatorSizeFree ? " activeCard" : "";
    const zeroClass = amount === 0 ? "zero" : "amount";
    const HardClass = amount > 10 ? " hard" : "";

    function toggleIndicatorsBtn(setIndicator, indicator) {
        setIndicator(!indicator);
    }

    function increaseAmount() {
        setAmount(amount + 1);
    }


    return (
        <div className="appCard">
            <img src={photo} alt=""/>
            <p>{name}</p>
            <div className="cardsIndicator">
                <Row className="cardRow">
                    <Col className={ "view" + indicatorActiveOneBtn }
                         onClick={() => toggleIndicatorsBtn(setIndicatorOne, indicatorOne)}>
                        <a href="#">тонкое</a>
                    </Col>
                    <Col className={ "view" + indicatorActiveTwoBtn }
                         onClick={() => toggleIndicatorsBtn(setIndicatorTwo, indicatorTwo)}>
                        <a href="#" >традиционное</a>
                    </Col>
                </Row>
                <Row className="cardRow">
                    <Col className={ "size" + indicatorActiveSizeOneBtn }
                         onClick={() => toggleIndicatorsBtn(setIndicatorSizeOne, indicatorSizeOne)}>
                        <a href="#" >26 см.</a>
                    </Col>
                    <Col className={ "size" + indicatorActiveSizeTwoBtn }
                         onClick={() => toggleIndicatorsBtn(setIndicatorSizeTwo, indicatorSizeTwo)}>
                        <a href="#" >30 см.</a>
                    </Col>
                    <Col className={ "size" + indicatorActiveSizeFreeBtn }
                         onClick={() => toggleIndicatorsBtn(setIndicatorSizeFree, indicatorSizeFree)}>
                        <a href="#">40 см.</a>
                    </Col>
                </Row>
                <Row className="cardPrice">
                    <Col className="price">от 395 ₽</Col>
                    <Col className="priceButton" onClick={increaseAmount}>
                        <a href="#" className="add">
                            <img src={plus} alt=""/>
                            Добавить
                            <div className={zeroClass + HardClass}>
                               <p>{amount}</p>
                            </div>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AppCard;