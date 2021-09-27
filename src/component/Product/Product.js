import React from 'react';


import './product.css'
const Product = (props) => {

  const {name,Role,country,salary,img} = props.product
    return (
  <div className="col-md-4">
 <div class="card mb-3" style={{"max-width": "540px"}}>
 <div class="row g-0">
   
     <img width="100px" height="75px" src={img} class="img-fluid rounded-start" alt="..."/>
   
   
     <div class="card-body">
       <h2 class="card-title">{name}</h2>
       <p class="card-text">{Role}</p>
       
       <p class="card-text">{salary}</p>

       <p class="card-text"><small class="text-muted">{country}</small></p>
       <button onClick={ ()=>props.handleAddToCart(props.product)}
            className="button-regular">Add To Card</button>
     </div>
   
 </div>
</div>
</div>
    );
};

export default Product;