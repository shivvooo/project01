import React,{useState,useRef} from 'react';

function Info(){

      let [product,setproduct] = useState({veggies:"",milk:"",meat:""})
      const divRef = useRef(null);
      if (divRef.current) {
      divRef.current.style.backgroundColor = "lightblue";
    divRef.current.style.width = "100%";
    divRef.current.style.padding = "30px";  
    }
  product = [{

    veggies: "carrot",
    milk: "1ltr",
    meat: "chicken"
  },
   {
    veggies:"beets",
    milk: "1/2 ltr",
    meat:"fish"
   }
]
    return (

        <div>
            <div ref = {divRef}>
<table border="1">
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
    </div>
    )
}

export default Info;