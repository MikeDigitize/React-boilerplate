const ADD = "ADD";
const REMOVE = "REMOVE";
const BASKETTOTAL = "BASKETTOTAL";

export function addProduct(product) {
    return { state : product, type: ADD };
}

export function removeProduct(product) {
    return { state : product, type: REMOVE };
}

export function calculateTotal() {
    return { type: BASKETTOTAL };
}