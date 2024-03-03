// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const UserListDetails = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async (username) => { // Add username parameter
//       try {
//         const response = await axios.get(`http://localhost:9090/attendance/attendanceRecordByUserName/${username}`);
//         setUsers(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData('abc'); // Pass the username 'abc'
//   }, []); // Make sure to include the dependency array if you're using variables inside useEffect

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>User List</h2>
//       <table border={1} style={{margin:"auto"}}>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Sign In Time</th>
//             <th>Sign Out Time</th>
//             <th>Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user, index) => (
//             <tr key={index}>
//               <td>{user.date}</td>
//               <td>{user.signIn}</td>
//               <td>{user.signOut}</td>
//               <td>{user.username}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserListDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserListDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/attendance/attendanceRecordByUserName/${username}`);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [username]); // Include username in the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User List Details for {username}</h2>
      <table border={1} style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sign In Time</th>
            <th>Sign Out Time</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.date}</td>
              <td>{user.signIn}</td>
              <td>{user.signOut}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListDetails;