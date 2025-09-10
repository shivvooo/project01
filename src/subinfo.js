import React from "react"

function Subinfo(props){

    return(

        <div>
            
            <ul>
                {Array.isArray(props.product) && props.product.map((products,index)=>(
            <React.Fragment key = {index}>
            <li>{products.veggies}</li>
            <li>{products.milk}</li>
            <li>{products.meat}</li>
            </React.Fragment>
            ))}
            </ul>
            
            </div>
    )
}

export default Subinfo;