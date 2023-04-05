import NavBar from './components/navbar/NavBar' 
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting = {"Soy un itemListContainer, saludos"} />

    </div>
  )
}

export default App
