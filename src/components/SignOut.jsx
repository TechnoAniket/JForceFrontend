import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const SignOutPage = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const history = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSignOut = async () => {
        console.log('User signed out at:', new Date().toLocaleTimeString());
        
        try {
       
            const previousObjectString = localStorage.getItem('signInData');
           
            const previousObject = previousObjectString ? JSON.parse(previousObjectString) : {};
            console.log(previousObject);
            const mergedObject = {
                ...previousObject,
                signOut: new Date().toLocaleTimeString(),
                username: localStorage.getItem('viewRecordUsername') 
            };
            
            localStorage.setItem('signInData', JSON.stringify(mergedObject));
    
            const response = await axios.post('http://localhost:9090/attendance/signout', {
                id: mergedObject.id,
                date: mergedObject.date,
                signIn: mergedObject.signIn,
                signOut: mergedObject.signOut,
                username: mergedObject.username 
            });
            
            console.log('Sign-out time sent to backend successfully');
        } catch (error) {
            console.error('Error sending sign-out time to backend:', error);
            alert('An error occurred while signing out. Please try again later.');
        }
    
        history("/login");
    };

    const handleViewRecord = () => {
        const storedUsername = localStorage.getItem('viewRecordUsername');
        if (storedUsername) {
            window.location.href = `http://localhost:9090/attendance/attendanceRecordByUserName/${storedUsername}`;
        } else {
            alert('Username not available.'); 
        }
    };

    return (
        <div className="sign-out-page">
            <h1>Sign Out</h1>
            <p>Date: {new Date().toLocaleDateString()}</p>
            <p>Time: {currentTime}</p>
            <button onClick={handleSignOut}>SIGN OUT</button>
            <button onClick={handleViewRecord}>View Record</button> 
        </div>
    );
};

export default SignOutPage;

