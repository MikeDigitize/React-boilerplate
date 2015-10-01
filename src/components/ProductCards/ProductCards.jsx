import React from "react";
import CSSModule from "react-css-modules";
import styles from "./product-cards.scss";
import BasketStore from "stores/BasketStore";
import Animator from "utils/animator.min";
import { addProduct, updateDisplayIndex } from "actions/basket-actions";
import { getProducts } from "utils/getProducts";

class ProductCards extends React.Component {

    constructor() {
        super();
        this.state = {
            cards : [],
            displayIndex : 0,
            lastIndex : 0
        };
        this.unique = 0;
        this.cardControlsEnabled = true;
        BasketStore.subscribe(this.updateDisplayIndex.bind(this));
    }

    componentWillMount() {
        getProducts()
            .then(data => {
                this.setState({
                    cards : data.products
                }, () => {
                    this.animateCardEntrance();
                });
            });
    }

    componentDidUpdate() {
        if(this.state.displayIndex !== this.state.lastIndex) {
            this.animateCardEntrance();
        }
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
                            className="btn btn-success"
                            styleName="button-styles"
                            onClick={ this.addProduct.bind(this)}>
                                Add to basket
                        </button>
                        <i
                            className="fa fa-arrow-circle-left"
                            styleName="card-control left"
                            onClick={ this.showPrevProduct.bind(this) }>
                        </i>
                        <i
                            className="fa fa-arrow-circle-right"
                            styleName="card-control right"
                            onClick={ this.showNextProduct.bind(this) }>
                        </i>
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

    animateCardEntrance() {
        let card = React.findDOMNode(this.refs.card);
        let prev = this.state.lastIndex;
        let next = this.state.displayIndex;
        let animation = prev === next ? "bounceInDown" : "fadeInUp";
        let duration = Animator.getPrefix("animation-duration");
        Animator.setStyles(card, Animator.createCSSRule(duration, "0.6s"));
        let sequence = Animator.animation({
            element : card,
            addClass : {
                before : animation
            },
            removeClass : {
                after : animation
            }
        });
        sequence.then(()=> {
            this.cardControlsEnabled = true;
        });
    }

    getUniqueId(id) {
        return id + (this.unique++);
    }

    showNextProduct() {
        if(this.cardControlsEnabled) {
            this.cardControlsEnabled = false;
            BasketStore.dispatch(updateDisplayIndex(this.state.displayIndex === this.state.cards.length - 1 ? 0 : this.state.displayIndex + 1));
        }
        console.log("next!");
    }

    showPrevProduct() {
        if(this.cardControlsEnabled) {
            this.cardControlsEnabled = false;
            BasketStore.dispatch(updateDisplayIndex(this.state.displayIndex > 0 ? this.state.displayIndex - 1 : this.state.cards.length - 1));
        }
        console.log("prev!");
    }

    updateDisplayIndex() {
        this.setState({
            lastIndex : this.state.displayIndex,
            displayIndex : BasketStore.getState().displayIndex
        });
    }

}

export default CSSModule(ProductCards, styles, { allowMultiple : true });

