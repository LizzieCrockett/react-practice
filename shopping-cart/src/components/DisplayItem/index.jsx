import React from 'react';
import './DisplayItem.css';

const DisplayItem = ({ image, name, price, description }) => {

    const [inCart, addToCart] = React.useState(false);
    const addItem = (event) => {
        event.preventDefault();
        addToCart(true);
    }

    return (
        <div className="display">
            <p id="item-name">{name.charAt(0).toUpperCase() + name.slice(1)}</p>
            <img id="shop-item-image" src={image} alt={name} />
            <p id="item-description">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
            <p>{`£${price}`}</p>
            <button id="add-button"  onClick={addItem}>Add to cart</button>
        </div>
    )
}

export default DisplayItem;