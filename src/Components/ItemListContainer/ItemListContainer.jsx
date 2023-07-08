import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByIdCategory } from "../../Productos";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;

                if (categoryId) {
                    response = await getProductsByIdCategory(categoryId);
                } else {
                    response = await getProducts();
                }

                setProducts(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [categoryId]);
    
    return (
        <div className="itemlistcontainer">
            <h1 className="greeting">Bienvenidos a Pinkys Showroom</h1>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;