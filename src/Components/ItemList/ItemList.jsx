import React from "react";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    if(!products) {
        return null;
    }
    
    return (
        <div className="ListGroup">
            {products.map((prod) => (
            <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList