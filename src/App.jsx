import Menu from './components/navbar/Menu' 
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
        <Menu />
        <ItemListContainer greeting = {"Soy un itemListContainer, saludos"} />

    </div>
  )
}

export default App
