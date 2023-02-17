import './CartWidget.scss'
import CartLogo from '../../img/cart.png'
import React from "react";


const CartWidget = () => {
    return (
        <a href="#" className="cart-widget">
            <img className='cart-img' src={ CartLogo }></img>
            <span className="counter">0</span>
        </a>
    );
};

export default CartWidget;