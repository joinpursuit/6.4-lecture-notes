import React from 'react';

const ItemDisplay = ({name, price, manufacturer}) => {
    return(
        <div>
            <h3>{name}</h3>
            <div>${price}</div>

        </div>
    )
}

export default ItemDisplay;