const products = [
    {
        id: '1',
        name: 'Vestido Paris',
        price: 12000,
        category: 'indumentaria',
        img: '../Imagenes/Vestido.jpeg',
        stock: 15,
        despription: 'Vestido de lino'
    },
    {
        id: '2',
        name: 'Gorra África',
        price: 6000,
        category: 'Accesorios',
        img: '../Imagenes/Gorra.jpeg',
        stock: 22,
        despription: 'Gorra beige'
    },
    {
        id: '3',
        name: 'Mantel Santorini',
        price: 10000,
        category: 'Home Deco',
        img: '../Imagenes/Mantel.jpeg',
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

export const getProductsByIdCategory = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

// export const getProductsById = (productId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(products.find(prod => prod.id === productId))
//         }, 500)
//     })
// }