import React from "react";
import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className="contador">
            <div className="controles">
                <button className="btn" onClick={decrement}>-</button>
                <h5 className="numero">{quantity}</h5>
                <button className="btn" onClick={increment}>+</button>
            </div>
            <div className="agregar-carrito">
                <button className="btn-carrito" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;