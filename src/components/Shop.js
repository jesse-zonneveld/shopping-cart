import React, { useState } from "react";
import Item from "./item";

import apple from "../images/apple.jpg";
import avocado from "../images/avocado.jpg";
import banana from "../images/banana.jpg";
import blueberry from "../images/blueberry.jpg";
import cantelope from "../images/cantelope.jpg";
import lemon from "../images/lemon.jpg";
import lime from "../images/lime.jpg";
import orange from "../images/orange.jpg";
import pair from "../images/pair.jpg";
import papaya from "../images/papaya.jpg";
import pineapple from "../images/pineapple.jpg";
import strawberry from "../images/strawberry.jpg";

const Shop = (props) => {
    const items = {
        apple: {
            name: "Apple",
            imageUrl: apple,
            desc: "Local grown, juicy, and delicious",
            price: 2.99,
        },
        avocado: {
            name: "Avocado",
            imageUrl: avocado,
            desc: "Local grown, juicy, and delicious",
            price: 2.99,
        },
        banana: {
            name: "Banana",
            imageUrl: banana,
            desc: "Local grown, juicy, and delicious",
            price: 2.99,
        },
        blueberry: {
            name: "Blueberry",
            imageUrl: blueberry,
            desc: "Local grown, juicy, and delicious",
            price: 0.99,
        },
        cantelope: {
            name: "Cantelope",
            imageUrl: cantelope,
            desc: "Local grown, juicy, and delicious",
            price: 0.99,
        },
        lemon: {
            name: "Lemon",
            imageUrl: lemon,
            desc: "Local grown, juicy, and delicious",
            price: 0.99,
        },
        lime: {
            name: "Lime",
            imageUrl: lime,
            desc: "Local grown, juicy, and delicious",
            price: 3.49,
        },
        orange: {
            name: "Orange",
            imageUrl: orange,
            desc: "Local grown, juicy, and delicious",
            price: 3.49,
        },
        pair: {
            name: "Pair",
            imageUrl: pair,
            desc: "Local grown, juicy, and delicious",
            price: 3.49,
        },
        papaya: {
            name: "Papaya",
            imageUrl: papaya,
            desc: "Local grown, juicy, and delicious",
            price: 0.49,
        },
        pineapple: {
            name: "Pineapple",
            imageUrl: pineapple,
            desc: "Local grown, juicy, and delicious",
            price: 0.49,
        },
        strawberry: {
            name: "Strawberry",
            imageUrl: strawberry,
            desc: "Local grown, juicy, and delicious",
            price: 0.49,
        },
    };

    const addToCartFromShop = (item, amount) => {
        props.addToCart(item, amount);
    };

    return (
        <div>
            <h1>Browse through our selection of fantastic fruit</h1>
            <div className="items-container">
                {Object.keys(items).map((key, index) => (
                    <Item
                        key={index}
                        object={items[key]}
                        addToCartFromShop={addToCartFromShop}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;
