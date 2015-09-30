import React from "react";
import Header from "./Header/Header.jsx";
import ProductSelect from "./ProductSelect/ProductSelect.jsx";
import BasketStore from "stores/BasketStore";
import BasketList from "./BasketList/BasketList.jsx";
import BasketTotal from "./BasketTotal/BasketTotal.jsx";
import ProductCards from "./ProductCards/ProductCards.jsx";

class App extends React.Component {

    componentDidMount() {
        BasketStore.subscribe(() => {
            console.log("State: ", BasketStore.getState());
        });
    }

    render() {
        return (
            <div>
                <Header />
                <ProductSelect />
                <BasketList />
                <BasketTotal />
                <ProductCards />
            </div>
        )
    }
}

React.render(<App />, document.querySelector(".app-holder"));
