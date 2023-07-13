import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import './Components/NavBar/NavBar.css';
import './Components/ItemListContainer/ItemListContainer.css';
import './Components/ItemList/ItemList.css';
import './Components/Item/Item.css';
import './Components/Checkout/Checkout.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import './Components/CheckoutForm/CheckoutForm.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos por categoría"}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;