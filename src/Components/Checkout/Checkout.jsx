import { writeBatch } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { getDocs, collection, query, where, documentId, Timestamp, addDoc } from "firebase/firestore";
import { db } from "../../Services/Firebase/FirebaseConfig";


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids )))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)

                clearCart()
            } else {
                console.error('Hay productos que están fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h1 className="checkout-loading">Se está generando su orden..</h1>
    }

    if(orderId) {
        return (
        <div className="checkout-success">
            <h1>¡Muchas gracias por elegirnos!</h1>
            <h2>El id de tu compra es: {orderId}</h2>
        </div>
        )
    }

    return (
        <div className="checkout-container">
            <h2>Completá tus datos para finalizar la compra</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout;