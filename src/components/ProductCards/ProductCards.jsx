import React from "react";
import CSSModule from "react-css-modules";
import styles from "./product-cards.scss";
import BasketStore from "stores/BasketStore";
import { addProduct, updateDisplayIndex } from "actions/basket-actions";
import { getProducts } from "utils/getProducts";

class ProductCards extends React.Component {

    constructor() {
        super();
        this.state = {
            cards : [],
            displayIndex : 0
        };
        this.unique = 0;
        BasketStore.subscribe(this.updateDisplayIndex.bind(this));
    }

    componentWillMount() {
        getProducts()
            .then(data => {
                this.setState({
                    cards : data.products
                });
            });
    }

    render() {
        let card = this.state.cards[this.state.displayIndex];
        if(!card) {
            return false;
        }
        else {
            return (
                <div
                    className="col-sm-8 col-sm-offset-2"
                    styleName="card-holder"
                    ref="card">
                    <div
                        styleName="card">
                        <h3>{ card.name }</h3>
                        <p styleName="desc">{ card.description }</p>
                        <p styleName="cost">&pound;{ card.cost }</p>
                        <button
                            className="btn btn-primary"
                            onClick={ this.addProduct.bind(this)}>
                                Add to basket
                        </button>
                    </div>
                </div>
            );
        }
    }

    addProduct() {
        let card = React.findDOMNode(this.refs.card);
        let selected = this.state.cards[this.state.displayIndex];
        BasketStore.dispatch(addProduct({
            name : selected.name,
            cost : selected.cost,
            id : this.getUniqueId(card.getAttribute("data-reactid"))
        }));
    }

    getUniqueId(id) {
        return id + (this.unique++);
    }

    updateDisplayIndex() {
        this.setState({
            displayIndex : BasketStore.getState().displayIndex
        });
    }

}

export default CSSModule(ProductCards, styles);

