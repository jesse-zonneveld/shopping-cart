import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Nav from "./Nav";
import Shop from "./Shop";

import "../scss/app.scss";

const App = () => {
    const [cartContents, setCartContents] = useState([]);

    const addToCart = (item, amount) => {
        const newArr = [...cartContents];
        let foundSameItem = false;
        newArr.forEach((cartItem, index) => {
            if (cartItem[0].name === item.name) {
                foundSameItem = true;
                console.log(foundSameItem);
                console.log(amount);
                console.log(cartItem[1]);
                const newAmount = +amount + +cartItem[1];
                console.log(newAmount);
                changeItemAmount(index, newAmount);
            }
        });
        if (!foundSameItem) {
            newArr.push([item, amount]);
            setCartContents(newArr);
        }
    };

    const removeFromCart = (index) => {
        const newArr = [...cartContents];
        newArr.splice(index, 1);
        setCartContents(newArr);
    };

    const changeItemAmount = (index, amount) => {
        const newArr = [...cartContents];
        console.log(newArr);
        console.log(index);
        newArr[index][1] = amount;
        setCartContents(newArr);
    };

    useEffect(() => {
        // console.log(cartContents);
    }, [cartContents]);

    return (
        <BrowserRouter>
            <div className="app l-container-full-screen">
                <Nav cartAmount={cartContents.length} />
                <div className="l-container-1080">
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={(props) => (
                                <Shop {...props} addToCart={addToCart} />
                            )}
                        />
                        <Route
                            exact
                            path="/cart"
                            render={(props) => (
                                <Cart
                                    {...props}
                                    removeFromCart={removeFromCart}
                                    cartContents={cartContents}
                                    changeItemAmount={changeItemAmount}
                                />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
