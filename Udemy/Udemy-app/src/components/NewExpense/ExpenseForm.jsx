import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleInputHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountInputHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateInputHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titre</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Montant</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2032-12-31"
            value={enteredDate}
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Ajouter</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
