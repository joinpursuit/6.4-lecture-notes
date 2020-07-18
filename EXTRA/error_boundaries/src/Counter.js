import React, { useState } from 'react'
import { render } from '@testing-library/react';

export default () => {
    const [count, setCount] = useState(0);

    if(count > 0 && count % 5 === 0) {
        throw Error("Wonky count!")
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add One</button>
            <button onClick={() => setCount(prevCount => prevCount + 2)}>Add Two</button>
        </div>
    )
}
