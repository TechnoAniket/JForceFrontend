import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9090/Jforce/user/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const { username } = formData;
            
            

            // Navigate based on role
            if (response.data === "ADMIN") {
                navigate("/admin");
            } else if (response.data === "USER") {
                navigate("/signup", { state: { username } });
            } else {
                alert("Invalid user");
            }

        } catch (error) {
            console.log(error);
            alert(error.message); // Display error message to the user
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>USERNAME</label><br />
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>

                <div>
                    <label>PASSWORD</label><br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div>
                    <button type="submit">Login</button>
                    <button type="button"><Link to={"/"}>Register</Link></button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
