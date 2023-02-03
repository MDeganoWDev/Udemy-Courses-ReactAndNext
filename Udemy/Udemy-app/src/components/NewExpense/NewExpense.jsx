import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";

const NewExpense = (props) => {
const saveExpenseDataHandler = (addedExpenseData) => {
    const expenseData = {
        ...addedExpenseData,
        id: Math.random().toString(),
    };
    props.onNewExpenseData(expenseData);
}

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
