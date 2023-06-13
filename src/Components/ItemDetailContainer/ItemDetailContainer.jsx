import { useState, useEffect } from 'react';
import { getProductsById } from '../../Productos';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer