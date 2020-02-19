import React from 'react';
import ItemDisplay from './ItemDisplay';

const CartList = ({items}) => {
    items = items.map((item, i) => {
        return <ItemDisplay key={i} 
                    name={item.name}
                    price={item.price}
                    manufacturer={item.manufacturer}
        />
    })
    return(
        <ul>
           {items}
        </ul>
    )
}

export default CartList