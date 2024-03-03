import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:9090/Jforce/user/listOfUser') 
      .then(response => response.json())
      .then(data => {
        setUsers(data); 
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); 
      });
  }, []);

  const handleNavigate = (username) => {
    navigate(`/userlistPage/${username}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(({ id, username }) => (
          <li key={id} style={{ color: "black" }}>
            <Link to={`/userlistPage/${username}`} onClick={() => handleNavigate(username)}>
              {username}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;