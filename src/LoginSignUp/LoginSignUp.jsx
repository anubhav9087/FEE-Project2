import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import './LoginSignUp.css';

const LoginSignUp = () => {
    const [action, setAction] = useState("LogIn");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUpOrLogin = () => {
        navigate('/translate');
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            {action === "Sign Up" && (
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
            )}
            <div className="input">
                <img src={email_icon} alt="" />
                <input 
                    type="email" 
                    placeholder='Email Id' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input 
                    type="password" 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            {action === "LogIn" && (
                <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            )}
            <div className="submit-container">
                <div 
                    className="submit"
                    onClick={handleSignUpOrLogin}
                >
                    {action}
                </div>
            </div>
            <div className="toggle-action" onClick={() => setAction(action === "LogIn" ? "Sign Up" : "LogIn")}>
                {action === "LogIn" ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
            </div>
        </div>
    );
};

export default LoginSignUp;
