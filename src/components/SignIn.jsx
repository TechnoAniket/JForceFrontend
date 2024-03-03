import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SignInPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [username, setUsername] = useState(''); 
  const history = useNavigate(); 
  const location = useLocation(); 

  useEffect(() => {
    const { state } = location;
    if (state && state.username) {
      setUsername(state.username);
    }
  }, [location]);

  const handleSignIn = async () => {
    console.log('User signed in at:', new Date().toLocaleTimeString());
    
    try {
      const signInData = {
        date: new Date().toLocaleDateString(),
        signIn: new Date().toLocaleTimeString(),
        username: username, 
      };

      localStorage.setItem('signInData', JSON.stringify(signInData));
    } catch (error) {
      console.error('Error signing in:', error);
      alert('An error occurred while signing in. Please try again later.');
    }
    
    console.log('Username:', username);
    history('/signout'); 
  };

  const handleViewRecord = () => {
    if (username) {
      history(`/userlistPage/${username}`); 
    } else {
      alert('Username not available.'); 
    }
  };

  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Time: {currentTime}</p>
      <button onClick={handleSignIn}>SIGN IN</button>
      <button onClick={handleViewRecord}>View Record</button>
    </div>
  );
};

export default SignInPage;

