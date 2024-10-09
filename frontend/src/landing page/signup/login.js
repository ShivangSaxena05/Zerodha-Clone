import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../util';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import "./Register.css"

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: '',
    });

    
    const navigate = useNavigate();
    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        
        
        try {
            const url = "http://localhost:3002/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            
            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'An error occurred');
            }
            
            const result = await response.json();
            console.log('Login response:', result);
            const { success, message, token, name } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', token);
                localStorage.setItem('loggedUser', name);
                window.location.href=`http://localhost:3001`;
            }
        } catch (err) {
            handleError(err.message);
            console.error('Login error:', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedLoginInfo = { ...loginInfo, [name]: value };
        setLoginInfo(updatedLoginInfo);
    };

    return (
        <div className="login-box pt-5">
            <div className='box'>
                <div className="login-title">
                    <h1>&nbsp;Log In</h1>
                </div>
                <div className="login-inputs">
                    <input
                        value={loginInfo.email}
                        onChange={handleChange}
                        name='email'
                        type="email"
                        className="input-field"
                        placeholder="UserId or email"
                    />
                    <input
                        value={loginInfo.password}
                        onChange={handleChange}
                        name='password'
                        type="password"
                        className="input-field"
                        placeholder="Password"
                    />
                </div>
                <div className="login-options">
                    <span className="remember-me">
                        <input type="checkbox" className="checkbox-input" />Remember me
                    </span>
                    <span className="forgot-pass">
                        <Link to="/" className="forgot-pass-link">Forgot Password?</Link>
                    </span>
                </div>
                <div className="login-actions my-3">
                    <form onSubmit={handleLogin}>
                        <button
                            type="submit"
                            id="login-button"
                            className="login-button fade-in-button btn rounded btn-primary"
                            title="Login"
                        >
                            Log In
                        </button>
                    </form>
                </div>
                    <p>Don't have an account? &nbsp; <i class="fa fa-long-arrow-right" aria-hidden="true"></i> <Link to="/signup" className="signup-link fade-in-button btn rounded btn-primary">Sign Up</Link></p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
