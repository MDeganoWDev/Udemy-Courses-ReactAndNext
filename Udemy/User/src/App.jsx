import AddUser from "./components/Users/AddUser";
import ListUser from "./components/Users/ListUser";
import "./App.css";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <ListUser users={usersList} />
    </div>
  );
}

export default App;
