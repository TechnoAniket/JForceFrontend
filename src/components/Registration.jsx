import React, { useState } from 'react';
import './RegisterPage.css'; 
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        role: '' 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:9090/Jforce/user/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        
           
        } catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred. Please try again later.');
        }
        
    };

    return (
        <div className="container">
            <h2>Register Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>USERNAME</label><br />
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required/>
                </div>

                <div>
                    <label>PASSWORD</label><br />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                </div>

                <div>
                    <label>EMAIL ID</label><br />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>

                <div>
                    <label>PHONE NO.</label><br />
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required/>
                </div>

                <div>
                    <label>Role</label><br />
                    <select name="role" value={formData.role} onChange={handleChange}required>
                        <option ></option> 
                        <option value="USER">USER</option> 
                        <option value="ADMIN">ADMIN</option>
                    </select>
                </div>

                <div>
                    <button type="button" ><Link to={'/login'}>Login</Link></button>
                    <button type="submit" >REGISTER</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
