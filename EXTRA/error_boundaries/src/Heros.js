import React from 'react'

export default ({hero}) => {
    if(hero === 'joker') {
        throw Error("Joker is NOT a Hero")
    }
    return(
        <div>{hero}</div>
    )
}
