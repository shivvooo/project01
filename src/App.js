import './App.css';
import Login from  "./login.js";
import Home from "./home.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  
 
  return (

    
<BrowserRouter>

        <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Home/>}/>

        </Routes>
        </BrowserRouter>
    
  );
}

export default App;
