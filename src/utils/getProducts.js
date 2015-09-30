export function getProducts() {
    return fetch('/data/data.json')
        .then(response => {
            return response.json()
        })
}