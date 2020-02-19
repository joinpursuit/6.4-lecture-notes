import React from 'react';
import '../css/ProductDisplay.css';

const ProductDisplay = ({name, manufacturer, price, quantity, handleAddToCart}) => {
    return(
        <div className={"productDisplayContainer"}>
            <h3>{name}</h3>
            <div>manufacturer: {manufacturer}</div>
            <div>
                ${price}
            </div>
            <div>
                {quantity} items remaining
            </div>
            <button onClick={() => handleAddToCart(name)}>Add To Cart</button>
        </div>
    )
}

export default ProductDisplay;