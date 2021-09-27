import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {

  const {name,Role,books,country,salary,img} = props.product
    return (
  <div className="col-md-4">
 <div class="card mb-3" style={{"max-width": "540px"}}>
 <div class="row g-0">
   
     <img src={img} class="img-fluid rounded-start" alt="..."/>
   
   
     <div class="card-body bg-info">
       <h2 class="card-title">Name:{name}</h2>
       <p class="card-text">Role:{Role}</p>
       <p class="card-text">Books:{books}</p>
       <p class="card-text">Salary:{salary}</p>
       <p class="card-text"><small class="text-muted">Country:{country}</small></p>
       <button onClick={ ()=>props.handleAddToCart(props.product)}
            className="button-regular"> <FontAwesomeIcon icon={faShoppingCart} />Add To Card</button>
     </div>
   
 </div>
</div>
</div>
    );
};

export default Product;