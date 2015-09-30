const ADD = "ADD";
const REMOVE = "REMOVE";
const UPDATEDISPLAYINDEX = "UPDATEDISPLAYINDEX";

export function addProduct(product) {
    return { state : product, type: ADD };
}

export function removeProduct(product) {
    return { state : product, type: REMOVE };
}

export function updateDisplayIndex(index) {
    return { state : index, type: UPDATEDISPLAYINDEX };
}