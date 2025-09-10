import React,{useState,useRef} from 'react';
import Subinfo from "./subinfo";

function Info(){
let [product,setproduct] = useState({veggies:"",milk:"",meat:""});
      
      const divRef = useRef(null);
      if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    divRef.current.style.width = "100%";
    divRef.current.style.padding = "30px";  
    }

    product = [{

        veggies: "carrot",
        milk: "1 ltr",
        meat:"chicken"
    }]
  
    return (

        <div>
            <div ref = {divRef}>
<table className = "table table-bordered table-striped w-50">
    <thead>
        <tr>
        <th>veggies</th>
        <th>milk</th>
        <th>meat</th>
    </tr>
    </thead>
    <tbody>
        {product.map((products,index) => (
     <tr key = {index}>
        <td>
{products.veggies}
        </td>
        <td>
            {products.milk}
        </td>
        <td>
            {products.meat}
        </td>
        
        </tr>
))}
    </tbody>
</table>

        </div>
    <Subinfo product = {product} />
    <div className = "frame border-dark p-2 bg-danger mh-100 mw-100 d-flex" style={{height : "300px" , width: "300px"}}>
        <iframe
            src = "http://localhost:3000/"
            title = "page"
            className = "w-5 h-5"

        />
    </div>
    </div>
    )
}

export default Info;