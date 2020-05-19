import React from 'react';
import './ShoppingCart.css'
import DisplayItem from '../DisplayItem';

const ShoppingCart = ({content}) => {
    return (
        <div className="cart">
            <h1 id="title">Your Shopping Cart</h1>
            {!content ?
                <div id="empty-cart">Your cart is empty</div>
                :
                <div id="cart-contents">
                    <DisplayItem />
                </div>
            }
        </div>
    )
}



export default ShoppingCart;