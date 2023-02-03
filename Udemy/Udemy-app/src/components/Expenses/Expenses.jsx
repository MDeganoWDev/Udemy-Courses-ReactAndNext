import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [dateFilter, setDateFilter] = useState("");

  const addNewDateFilter = (newDateFilter) => {
    setDateFilter(newDateFilter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === dateFilter;
  });

  let expenseContent = <p>Pas de dépenses trouvées</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={dateFilter}
        onDateFilterChange={addNewDateFilter}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
