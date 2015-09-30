import { createStore } from "redux";

let initialState = {
    inBasket : []
};

function basketAction(state = initialState, action = {}) {
    switch (action.type) {
        case "ADD":
            return Object.assign({}, state, {
                inBasket : state.inBasket.concat(action.state)
            });
        case "REMOVE":
            return Object.assign({}, state, {
                inBasket : state.inBasket.filter(prod => Number(prod.id) !== Number(action.state.id))
            });
        default:
            return state;
    }
}

let basket = createStore(basketAction);
export default basket;