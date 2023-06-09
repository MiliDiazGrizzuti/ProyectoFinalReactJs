import Vestido from './Imagenes/Vestido.jpeg';
import Gorra from './Imagenes/Gorra.jpeg';
import Mantel from './Imagenes/mantel.jpeg';


const products = [
    {
        id: '1',
        name: 'Vestido Paris',
        price: 12000,
        category: 'indumentaria',
        img: <img src={Vestido} alt="Productos" className='Vestido'></img>,
        stock: 15,
        despription: 'Vestido de lino'
    },
    {
        id: '2',
        name: 'Gorra África',
        price: 6000,
        category: 'Accesorios',
        img: <img src={Gorra} alt="Productos" className='Gorra'></img>,
        stock: 22,
        despription: 'Gorra beige'
    },
    {
        id: '3',
        name: 'Mantel Santorini',
        price: 10000,
        category: 'Home Deco',
        img: <img src={Mantel} alt="Productos" className='Mantel'></img>,
        stock: 10,
        despription: 'Mantel de lino'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}