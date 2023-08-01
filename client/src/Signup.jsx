import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios'
const Signup = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name && email && password){
            axios.post('http://127.0.0.1:3001/register', {name, email, password})
            .then(result=>{console.log(result)
            navigate('/login')
            })
            .catch(err=>console.log(err));
        }
        
    }
    return (

        <div className="container">
            
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="Enter Here" id="name" name="name" autoComplete="off" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter Here" id="email" name="email" autoComplete="off" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Here" id="password" name="password" autoComplete="off" />
                </div>
                <button type="submit">Register</button>

                <p>Already have an account?</p>
                <button type="button" onClick={()=>{navigate('/login')}}>Login</button>
            </form>
        </div>

    )
}

export default Signup
