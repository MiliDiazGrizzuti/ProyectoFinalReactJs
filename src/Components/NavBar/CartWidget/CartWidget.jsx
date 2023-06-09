import React from "react";
import Carrito from './Images/Carrito.png';

const CartWidget = () => {
    return (
        <div>
            <img src={Carrito} alt="Cart-Widget" className="cart-icon"></img>
            0
        </div>
    )
}

export default CartWidget;

