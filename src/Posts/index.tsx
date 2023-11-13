import axios from "axios";
import React, { useState } from "react";

interface UsersProps {
  id: number;
  name: string;
  email: string;
  username: string;
}

const Posts = () => {
  const [users, setUsers] = useState<UsersProps[]>([]);

  async function handleGetUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  }
  return (
    <div>
      <button onClick={handleGetUsers}>Buscar usuarios</button>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <strong>{user.username}</strong>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Posts;
