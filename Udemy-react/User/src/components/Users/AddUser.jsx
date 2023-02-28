import classes from "./AddUser.module.css";
import { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();

  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // const enteredName = inputAgeRef.current.value;
    // const enteredAge = inputAgeRef.current.value;
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valide age superior to 0",
      });
      return;
    }
    props.onAddUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
    // inputNameRef.current.value ='';
    // inputAgeRef.current.value ='';
  };

  const inputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputName}
            onChange={inputNameHandler}
            // ref={inputNameRef}
          />
          <label htmlFor="age">Age (année)</label>
          <input
            id="age"
            type="number"
            value={inputAge}
            onChange={inputAgeHandler}
            // ref={inputAgeRef}
          />
          <Button type="submit">Ajouter</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
