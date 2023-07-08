import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Services/Firebase/FirebaseConfig";

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (loading) {
        return <p>Cargando...</p>;
    }
    
    return (
        <div className="itemlistcontainer">
            <h1 className="greeting">Bienvenidos a Pinkys Showroom</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;