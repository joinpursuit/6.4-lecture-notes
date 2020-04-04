import React from 'react';

const Wrapper = (props) => {
    return( 
        <div>
            LOOK I"M WRAPPING
            {props.children}
            STILL WRAPPING 
        </div>
    )
}

export default Wrapper;