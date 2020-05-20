import React from 'react';
import './ShoppingCart.css'
import DisplayItem from '../DisplayItem';
import DisplayShelf from '../DisplayShelf';

const ShoppingCart = ({content}) => {
    return (
    <>
        <DisplayShelf />

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
    </>
    )
}



export default ShoppingCart;