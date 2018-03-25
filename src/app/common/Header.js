import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper teal darken-1">
                    <Link to="/home" className="brand-logo"><i className="material-icons">people</i>Bit People</Link>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/about"><i className="material-icons">info_outline</i></Link></li>
                        <li onClick={props.handleClick}><a><i className="material-icons">{props.grid ? "view_list" : "view_module"}</i></a></li>
                        <li onClick={props.handleRefresh}><a><i className="material-icons">refresh</i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;