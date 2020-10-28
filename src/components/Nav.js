import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <div className="logo">
                Fresh<strong>Fruit</strong>
            </div>
            <ul className="nav-items-container">
                <Link to="/shopping-cart/">
                    <li className="nav-item">Shop</li>
                </Link>
                <Link to="/shopping-cart/cart">
                    <li className="nav-item cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span
                            className={
                                props.cartAmount >= 1
                                    ? "cart-amount"
                                    : "cart-amount hide"
                            }
                        >
                            {props.cartAmount}
                        </span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;
