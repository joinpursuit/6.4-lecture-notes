import React from 'react';

const styles = {
    img: {
        height: '200px', 
        width:'200px'
    }
}

const Dog = ({img}) => {
    return (
        <img src={img} alt={""} style={styles.img}/>
    )
}



export default Dog;