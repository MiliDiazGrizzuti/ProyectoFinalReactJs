import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting={"Bienvenidos a Pinkys Showroom"}/>

      <ItemDetailContainer />

      <ItemCount initial={1} stock= {50} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>

    </div>
  );
}

export default App;