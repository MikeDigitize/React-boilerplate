import React from "react";
import CSSModule from "react-css-modules";
import styles from "./basket-list.scss";
import BasketStore from "stores/BasketStore";
import Animator from "utils/animator.min";
import { removeProduct } from "actions/basket-actions";

class BasketList extends React.Component {

    constructor(){
        super();
        this.state = {
            products : []
        };
        BasketStore.subscribe(this.basketUpdate.bind(this));
    }

    componentDidUpdate() {
        let listItems = this.createList();
        let styles = { height : (!listItems.length ? 0 : 50 + (listItems.length * 40)) + "px" };
        let basketList = React.findDOMNode(this.refs.basketList);
        let item = basketList.querySelectorAll(".basket-product")[!listItems.length ? 0 : listItems.length - 1];
        let sequence = Animator.transition({
            element : basketList,
            properties : "height",
            setStyles : {
                before: styles
            }
        });
        sequence.then(()=> {
            if(item) {
                return Animator.transition({
                    element: item,
                    properties: "opacity",
                    setStyles: {
                        before: {
                            opacity: 1
                        }
                    }
                });
            }
        }).then(() => {
            console.log("all done!");
        });

    }

    render() {
        let listItems = this.createList();
        return (
            <div
                styleName="basket-list"
                ref="basketList">
                    <em>Your basket</em>
                    <ol>{ listItems }</ol>
            </div>
        );
    }

    createList() {
        return this.state.products.map((product, i) =>
            <li
                className="basket-product"
                key={i}
                data-id={ product.id }
                data-cost={ product.cost }
                data-value={ product.name }>
                { product.name }
                <i
                    className="fa fa-times"
                    styleName="close"
                    onClick={ this.removeProduct.bind(this) }>
                </i>
            </li>);
    }

    basketUpdate() {
        this.setState({
            products : BasketStore.getState().inBasket
        });
    }

    removeProduct(evt) {
        let product = evt.target.parentNode;
        BasketStore.dispatch(removeProduct({
            name : product.getAttribute("data-value"),
            cost : product.getAttribute("data-cost"),
            id : product.getAttribute("data-id")
        }));
    }

}

export default CSSModule(BasketList, styles);