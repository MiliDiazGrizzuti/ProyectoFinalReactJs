import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
  
    const handleRemoveItem = () => {
      removeItem(id);
    };
  
    return (
      <div className="CartItem">
        <h4>{name}</h4>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <button onClick={handleRemoveItem} className='Button'>Eliminar</button>
      </div>
    );
  };
  
  export default CartItem;