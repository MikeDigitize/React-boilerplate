import React from "react";
import BasketStore from "stores/BasketStore";

export default class BasketTotal extends React.Component {

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
                <p style={this.getTotalStyles()}>Basket total: <span style={this.getCostStyles()}>&pound;{ this.state.total }</span></p>
            </div>
        );
    }

    updateTotal() {
        this.setState({
            total : BasketStore.getState().basketTotal
        });
    }

    getTotalStyles() {
        return {
            fontSize: "18px",
            fontWeight: "normal",
            textAlign: "right",
            color: "#333"
        }
    }

    getCostStyles() {
        return {
            fontWeight: "bold",
            fontSize: "25px"
        }
    }
}

//export default CSSModule(BasketTotal, styles);