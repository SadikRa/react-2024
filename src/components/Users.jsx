import { useEffect } from "react";
import { useState } from "react";
const Users = () => {
    const [users, setUser] = useState([]);
    
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setUser(json));
         
    }, []);
  
    return (
      <div className="m-10 p-10">
        <h1>Posts</h1>
        <h2>{users.length}</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2 className="text-2xl p-6">{user.title}</h2>
              <p className="p-6 border bg-red-100 rounded-lg">{user.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Users;