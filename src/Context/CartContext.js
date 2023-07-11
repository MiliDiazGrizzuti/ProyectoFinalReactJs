import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart:[],
    total:0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        updateTotal();
      }, [cart]);
    
      console.log(cart);

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotal(prevTotal => prevTotal + item.price * quantity);
        } else {
            console.error("El producto ya fue agregado")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    
    const updateTotal = () => {
        const newTotal = cart.reduce(
          (accumulator, product) => accumulator + product.price * product.quantity,
          0
        );
        setTotal(newTotal);
    }

    return (
        <CartContext.Provider value={{ cart, total, addItem, removeItem, clearCart }}>
            { children }
        </CartContext.Provider>
    )
}