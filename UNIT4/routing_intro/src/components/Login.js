import React, { useState } from 'react';
import { useInput } from '../util/customHooks';

// const [ state, setState ] = useState({
//      userName: "",
//      password: "" 
//     })
// const [ userName, setUserName] = useState("");
// const [ password, setPassword ] = useState("");
    // const handleChange = (e) => {
    //     setState({...state, [e.target.name]: e.target.value})
    // }
const Login  = () => {
        const userNameObj = useInput("");
        const passwordObj = useInput("");

        const handleSubmit = (e) => {
            e.preventDefault()
        }

        console.log(userNameObj, passwordObj)
        return ( 
            <form onSubmit={handleSubmit}>
                <input name={"userName"}  {...userNameObj}/>
                <input name={"password"} {...passwordObj}  />
                <button>Submit</button>
            </form>
         );
}
 
export default Login;


