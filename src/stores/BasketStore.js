import { createStore } from "redux";

function basketApp(state = {}, action = {}) {
    return {
        inBasket : updateBasket(state.inBasket, action),
        basketTotal : getBasketTotal(updateBasket(state.inBasket, action)),
        displayIndex : updateDisplayedProductIndex(state.displayIndex, action)
    }
}

function updateBasket(state = [], action = {}) {
    switch (action.type) {
        case "ADD":
            return state.concat(action.state);
        case "REMOVE":
            return state.filter(prod => prod.id !== action.state.id);
        default:
            return state;
    }
}

function updateDisplayedProductIndex(state = 0, action = {}) {
    switch (action.type) {
        case "UPDATEDISPLAYINDEX":
            return action.state;
        default:
            return state;
    }
}

function getBasketTotal(products) {
    if(!products || !products.length) {
        return 0;
    }
    else {
        return products.map(product => product.cost).reduce((price, nxtPrice) => Number(price) + Number(nxtPrice));
    }
}

let basketStore = createStore(basketApp);
export default basketStore;