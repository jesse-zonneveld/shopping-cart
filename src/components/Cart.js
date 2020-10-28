import React, { useState, useEffect } from "react";

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const [editIndex, setEditIndex] = useState("");

    const calculateTotal = () => {
        let newTotal = 0;
        props.cartContents.forEach((cartItem) => {
            const addAmount = (cartItem[0].price * cartItem[1]).toFixed(2);
            newTotal += +addAmount;
        });
        setTotal(+newTotal.toFixed(2));
    };

    const deleteItem = (index) => {
        props.removeFromCart(index);
        // calculateTotal();
    };

    const passItemToUpdate = (e, index) => {
        const form = new FormData(e.currentTarget);
        let editAmount = form.get("amount");
        props.changeItemAmount(index, +editAmount);
        setEditIndex("");
    };

    useEffect(() => {
        calculateTotal();
    });

    return (
        <div>
            {props.cartContents.length <= 0 ? (
                "You have no items in your cart"
            ) : (
                <div className="cart-items-table">
                    <div className="cart-row top-row">
                        <div className="cart-item-name">Item</div>
                        <div className="quantity-title">Quantity</div>
                        <div>Total</div>
                    </div>
                    {props.cartContents.map((cartItem, index) => {
                        return (
                            <div className="cart-row" key={index}>
                                <div className="cart-item-name-and-options">
                                    <div className="cart-item-name">
                                        {cartItem[0].name}
                                    </div>
                                    <i
                                        className="far fa-trash-alt btn-delete"
                                        onClick={() => deleteItem(index)}
                                    ></i>
                                    <i
                                        className="fas fa-edit btn-edit"
                                        onClick={() => setEditIndex(index)}
                                    ></i>
                                </div>
                                <div className="quantity" data-index={index}>
                                    {editIndex === index ? (
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                passItemToUpdate(e, index);
                                            }}
                                        >
                                            <input
                                                className="edit-input"
                                                name="amount"
                                                type="number"
                                                min="1"
                                                defaultValue={cartItem[1]}
                                            />
                                            <input
                                                type="submit"
                                                value="Update"
                                            />
                                        </form>
                                    ) : (
                                        `${cartItem[1]}  x  $${cartItem[0].price}`
                                    )}
                                </div>
                                <div className="sub-total">
                                    {`$${(
                                        cartItem[0].price * cartItem[1]
                                    ).toFixed(2)}`}

                                    {props.cartContents.length - 1 === index ? (
                                        <div className="total">${total}</div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cart;
