import React from 'react';
import './cart.css'

const Cart = (props) => {
    console.log(props.cart) 
const {cart}=props;
let total = 0;

for(const writer of cart){
    total =total + parseInt(writer.salary);
  
}
   
    return (
 <div className="cart">
 <h2>Writer Salary Summation</h2>
 <h4>Writer Added:{props.cart.length}</h4>
<h6>Total Salary:${total}</h6>


</div>
    );
};

export default Cart;