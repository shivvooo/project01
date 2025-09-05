import React,{useState} from 'react';
import About from './about';
import Info from './info';
import './login.css';
function Home(){

  const [activetab,setactivetab] = useState("info");

    return(

        <div>
            <div className = "placing">
            <nav className = "menu">
                
                    <button
                       className = {`info  ${ activetab==="info" ? "activetab" : ""}`} onClick = {()=>setactivetab("info")}
                       >
                        <span>info</span>
                                  <div className = "details">

    <button>1.info</button>
    <button>2.info</button>
    </div>
      
                    </button>
            

                 <button className={activetab==="home" ? "activetab" : ""} onClick= {() => setactivetab("about")}
                    >
                        About

                    </button>
                
            </nav>
            </div>
{
            activetab === "info" && <Info />}
            {
            activetab === "about" && <About/> 
}


        </div>
    )
}

export default Home;