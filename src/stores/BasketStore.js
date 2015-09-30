import { createStore } from "redux";

let initialState = {
    inBasket : [],
    basketTotal : 0,
    displayIndex : 0
};

function basketAction(state = initialState, action = {}) {
    let products;
    switch (action.type) {
        case "ADD":
            products = addProductToBasket(state.inBasket, action.state);
            return Object.assign({}, state, {
                inBasket : products,
                basketTotal : getBasketTotal(products)
            });
        case "REMOVE":
            products = removeProductFromBasket(state.inBasket, action.state);
            return Object.assign({}, state, {
                inBasket : products,
                basketTotal : getBasketTotal(products)
            });
        case "UPDATEDISPLAYINDEX":
            return Object.assign({}, state, {
                displayIndex : action.state
            });
        default:
            return state;
    }
}

function addProductToBasket(basket, product) {
    return basket.concat(product);
}

function removeProductFromBasket(basket, product) {
    return basket.filter(prod => prod.id !== product.id);
}

function getBasketTotal(products) {
    if(!products.length) {
        return 0;
    }
    else {
        return products.map(product => product.cost).reduce((price, nxtPrice) => Number(price) + Number(nxtPrice));
    }
}

let basket = createStore(basketAction);
export default basket;