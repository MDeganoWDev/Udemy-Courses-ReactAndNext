import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";
import { useState } from "react";

const NewExpense = (props) => {
  const [viewFormControler, setViewFormControler] = useState(false);

  const saveExpenseDataHandler = (addedExpenseData) => {
    const expenseData = {
      ...addedExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseData(expenseData);
    setViewFormControler(false);
  };
  const cancelHandler = () => {
    setViewFormControler(false);
  };
  const viewFormControlerHandler = () => {
    setViewFormControler(true);
  };

  let viewForm = (
    <button onClick={viewFormControlerHandler}>Ajouter dépense</button>
  );

  if (viewFormControler) {
    viewForm = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        cancelButton={cancelHandler}
      />
    );
  }

  return <div className="new-expense">{viewForm}</div>;
};

export default NewExpense;
