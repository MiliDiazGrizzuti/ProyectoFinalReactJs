import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByIdCategory } from "../../Productos";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByIdCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
    
    return (
        <div className="Greeting">
            <h1>Bienvenidos a Pinkys Showroom</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;