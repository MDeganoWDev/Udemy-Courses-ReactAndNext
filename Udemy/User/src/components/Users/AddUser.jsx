import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import { useState } from "react";

const AddUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }
    if (+inputAge < 1) {
      return;
    }
    props.onAddUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const inputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={inputName}
          onChange={inputNameHandler}
        />
        <label htmlFor="age">Age (année)</label>
        <input
          id="age"
          type="number"
          value={inputAge}
          onChange={inputAgeHandler}
        />
        <Button type="submit">Ajouter</Button>
      </form>
    </Card>
  );
};

export default AddUser;
