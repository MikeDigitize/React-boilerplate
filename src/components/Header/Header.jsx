import React from "react";
import CSSModule from "react-css-modules";
import styles from "./header.scss";

class Header extends React.Component {

    render() {
        return (
            <header className="col-xs-12" styleName="header-styles">
                <h1 styleName="header-sass">AO.com</h1>
            </header>
        );
    }

}

export default CSSModule(Header, styles, { allowMultiple : true });