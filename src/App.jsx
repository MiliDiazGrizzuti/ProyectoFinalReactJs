import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting={"Bienvenidos a Pinkys Showroom"}/>

    </div>
  );
}

export default App;

// Si NavBar tuviera hijos, irían adentro y se cerraría así <NavBar> y dentro los hijos </NavBar>