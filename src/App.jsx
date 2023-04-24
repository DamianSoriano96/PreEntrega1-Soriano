import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import  NavBar  from "./components/navbar/NavBar";
import  ItemListContainer  from "./components/itemListContainer/itemListContainer";
import  ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import ItemCount from './components/itemCount/itemCount'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Router>
            <NavBar />   
            <Routes>
                <Route 
                    path='/' 
                    element={<ItemListContainer />} 
                />
                <Route 
                    path='/categoria/:categoria' 
                    element={<ItemListContainer />} 

                />

                <Route 
                    path='/detail/:id' 
                    element={<ItemDetailContainer />}
                />


                {/* <Route path='*' element={ <Navigate to='/notfound' /> } />             */}
                <Route path='*' element={ <Navigate to='/' /> } />            
            </Routes>
            <ItemCount />
            {/* <Footer /> */}
        </Router>     

    </div>
  );
}

export default App;
