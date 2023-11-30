import React, { useState, useEffect } from 'react';
import { getAllUsers, createUser } from '../../services/userService';

function Users() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
  });

  useEffect(() => {
    async function fetchData() {
      const usersData = await getAllUsers();
      setUsers(usersData);
    }
    fetchData();
  }, []);

  const handleCreateUser = async () => {
    const createdUser = await createUser(newUser);
    setUsers([...users, createdUser]);
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setNewUser({ ...newUser, username: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
    </div>
  );
}

export default Users;
