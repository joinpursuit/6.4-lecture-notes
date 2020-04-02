import  { useEffect, useState } from 'react';
import axios from 'axios';
export const useHttp = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchData = async (url) => {
        try {
            let res = await axios.get(url);
            setData(res.data)  
            setIsLoading(false)
        } catch (err) {
            setData(initialValue)
            setIsLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        // setTimeout (() => {
            fetchData(url)

        // }, 3000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return [data, isLoading];
}