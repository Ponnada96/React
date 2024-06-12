import React, { useContext, useState } from 'react';
import './Login.css'; // Import the CSS file
import userContext from './context/userContext';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);
    function sumbitHandler() {
        if (!name || !password) {
            return;
        }
        setUser({ name, password })
    };

    return (
        <div className="login-container">
            <h1 className="login-header">Login</h1>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={sumbitHandler} >Submit</button>
        </div>
    );
}

export default Login;
