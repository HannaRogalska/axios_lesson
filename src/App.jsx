import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx"
import "./App.css";
import { getUsers, createUser } from "./api/getUsers";
function App() {
  const [users, setUsers] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const  name  = useContext(AuthContext);

  

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  const getInputValue = (e) => {
    setValueInput(e.target.value);
  };

  const sentPost = async (e) => {
    e.preventDefault();
    const newPost = await createUser(valueInput);
    console.log("Created post:", newPost);
  };

  return (
    <div>
      <input value={valueInput} onChange={getInputValue}></input>{" "}
      <button onClick={sentPost}>Sent</button>
      <div>Hello { name }</div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
