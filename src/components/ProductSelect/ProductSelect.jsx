import React from "react";
import CSSModule from "react-css-modules";
import styles from "./product-select.scss";
import BasketStore from "stores/BasketStore";
import { addProduct, updateDisplayIndex } from "actions/basket-actions";
import { getProducts } from "utils/getProducts";

class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            products : []
        };
        this.unique = 0;
    }

    componentWillMount() {
        getProducts()
            .then(data => {
                this.setState({
                    products : data.products
                });
            });
    }

    render() {
        let options = this.createOptions();
        return (
            <div className="col-sm-4 col-sm-offset-4" styleName="add-product-holder">
                <h2>Pick a product</h2>
                <select
                    ref="addProduct"
                    className="form-control"
                    styleName="select-styles"
                    onChange={ this.onProductChange.bind(this) }>
                    { options }
                </select>
                <button
                    onClick={ this.addProduct.bind(this) }
                    className="btn btn-success"
                    styleName="button-styles">
                    Add Product
                </button>
            </div>
        );
    }

    createOptions() {
        return this.state.products.map((product, i) =>
            <option
                value={ product.name }
                key={i}
                data-cost={ product.cost }>
                { product.name }
            </option>);
    }

    addProduct() {
        let options = React.findDOMNode(this.refs.addProduct).options;
        let selected = options[options.selectedIndex];
        BasketStore.dispatch(addProduct({
            name : selected.value,
            cost : selected.getAttribute("data-cost"),
            id : this.getUniqueId(selected.getAttribute("data-reactid"))
        }));
    }

    getUniqueId(id) {
        return id + (this.unique++);
    }

    onProductChange() {
        let options = React.findDOMNode(this.refs.addProduct).options;
        BasketStore.dispatch(updateDisplayIndex(options.selectedIndex));
    }

}

export default CSSModule(AddProduct, styles);