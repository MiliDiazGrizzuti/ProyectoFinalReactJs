import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Carrito from './Images/Carrito.png';



const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className= 'CartImg' src={Carrito} alt="cart-widget" />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget;