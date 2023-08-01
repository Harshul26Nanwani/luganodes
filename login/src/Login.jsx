import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:3001/login', { email, password })
            .then((result) => {
                console.log(result);
                if(result.data==="Success"){
                    navigate('/home');
                } else if(result.data==="NotFound"){
                    navigate('/NotFound')
                } else if(result.data==="IncorrectPassword"){
                    navigate('/IncorrectPassword')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <div className="container">
           
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter Here" id="email" name="email" autoComplete="off" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter Here" id="password" name="password" autoComplete="off" />
                </div>
                <button type="submit">Login</button>
                <p>Create A New Account</p>
                <button type="button" onClick={()=>{navigate('/register')}}>Register</button>
            </form>
        </div>

    )
}

export default Login;
