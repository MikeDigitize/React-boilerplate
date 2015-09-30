import React from "react";
import BasketStore from "stores/BasketStore";
import { removeProduct } from "actions/basket-actions";

export default class BasketList extends React.Component {

    constructor(){
        super();
        this.state = {
            products : []
        };
        BasketStore.subscribe(this.basketUpdate.bind(this));
    }

    render() {
        let listItems = this.createList();
        return (
            <div className="col-sm-4 col-sm-offset-4">
                <ol>{ listItems }</ol>
            </div>
        );
    }

    createList() {
        return this.state.products.map((product, i) =>
            <li onClick={ this.removeProduct.bind(this) }
                key={i}
                data-id={ product.id }
                data-cost={ product.cost }
                data-value={ product.name } >
                { product.name }
            </li>);
    }

    basketUpdate() {
        this.setState({
            products : BasketStore.getState().inBasket
        });
    }

    removeProduct(evt) {
        let product = evt.target;
        BasketStore.dispatch(removeProduct({
            name : product.getAttribute("data-value"),
            cost : product.getAttribute("data-cost"),
            id : product.getAttribute("data-id")
        }));
    }

}