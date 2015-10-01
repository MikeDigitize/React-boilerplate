import React from "react";
import CSSModule from "react-css-modules";
import styles from "./basket-total.scss";
import BasketStore from "stores/BasketStore";

class BasketTotal extends React.Component {

    constructor() {
        super();
        this.state = {
            total: 0
        };
        BasketStore.subscribe(this.updateTotal.bind(this));
    }

    render() {
        return(
            <div className="col-sm-4 col-sm-offset-4">
                <p styleName="total">Basket total: <span styleName="cost">&pound;{ this.state.total }</span></p>
            </div>
        );
    }

    updateTotal() {
        this.setState({
            total : BasketStore.getState().basketTotal
        });
    }

}

export default CSSModule(BasketTotal, styles);