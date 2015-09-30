import React from "react";
import CSSModule from "react-css-modules";
import styles from "./basket-total.scss";
import BasketStore from "stores/BasketStore";

class BasketTotal extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        };
        BasketStore.subscribe(this.updateTotal.bind(this));
    }

    render() {
        let total = this.getBasketTotal();
        return(
            <div className="col-sm-4 col-sm-offset-4">
                <p styleName="total">&pound;{ total }</p>
            </div>
        );
    }

    getBasketTotal() {
        if(!this.state.products.length) {
            return 0;
        }
        else {
            return this.state.products.map(product => product.cost).reduce((price, nxtPrice) => Number(price) + Number(nxtPrice));
        }
    }

    updateTotal() {
        this.setState({
            products : BasketStore.getState().inBasket
        });
    }

}

export default CSSModule(BasketTotal, styles);