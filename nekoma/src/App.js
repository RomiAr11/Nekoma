
import './App.css';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a Nekoma"} />
    </div>
  );
}

export default App;
