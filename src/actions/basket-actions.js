const ADD = "ADD";
const REMOVE = "REMOVE";

export function addProduct(product) {
    return { state : product, type: ADD };
}

export function removeProduct(product) {
    return { state : product, type: REMOVE };
}