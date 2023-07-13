import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import Carrito from './Images/Carrito.png';



const CartWidget = () => {
    const { total } = useContext(CartContext)

    return (
        <Link to='/cart' className= "CartWidget" style={{ display: total > 0 ? 'block' : 'none'}}>
            <img className= "CartImg" src={Carrito} alt="cart-widget" />
            <span className="CartQuantity">{total}</span>
        </Link>
    )
}

export default CartWidget;