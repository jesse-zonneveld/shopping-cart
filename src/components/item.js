import React from "react";

const Item = (props) => {
    const passItemToCart = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let amount = form.get("amount");
        e.currentTarget.reset();
        if (amount <= 0) amount = 1;
        props.addToCartFromShop(props.object, amount);
    };
    return (
        <div className="item">
            <div className="ribbon ribbon-top-left">
                <span>${props.object.price}</span>
            </div>
            <img src={props.object.imageUrl} alt="fruit" />
            <div className="item-name">{props.object.name}</div>
            <div className="item-desc">{props.object.desc}</div>
            <form onSubmit={passItemToCart}>
                <input type="number" name="amount" min="1" placeholder="1" />
                <input type="submit" value="Add to cart" />
            </form>
        </div>
    );
};

export default Item;
