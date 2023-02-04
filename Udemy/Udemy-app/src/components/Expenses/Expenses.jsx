import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={dateFilter}
        onDateFilterChange={addNewDateFilter}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
