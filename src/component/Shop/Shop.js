import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './../Product/Product';
import Cart from '../../Cart';




const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([]);
    useEffect(() => {
        fetch('./writers.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, []);
 const handleAddToCart = (product) => {
     const newCart =[...cart,product];
     setCart(newCart);
    
    //  console.log(product)
 }

 console.log(cart);
    return (
        <div className="shop-container">
            <div className="product-container row">
                {
                    products.map(product => <Product 
                        key={product.name}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                  
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
                 </div>
        </div>
    );
};

export default Shop;