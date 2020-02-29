
import React, {useState, useEffect } from 'react';

const Clock = () => {
    const [ time, setTime ] = useState(new Date().toLocaleString());

    useEffect(() => {
        const timer = setInterval(() => {
            console.log(new Date().toLocaleString())
            setTime(new Date().toLocaleString());   
            }, 1000)

            return () => clearInterval(timer);
    }, [])
    return(
        <div>
            {time}
        </div>
        )
}

export default Clock;