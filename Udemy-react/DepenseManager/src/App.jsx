import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "React cours",
    amount: 129.99,
    date: new Date(2022, 12, 3),
  },
  {
    id: "e2",
    title: "Javascript cours",
    amount: 139.99,
    date: new Date(2022, 9, 6),
  },
  {
    id: "e3",
    title: "Divers cours",
    amount: 79.99,
    date: new Date(2023, 3, 7),
  },
  {
    id: "e4",
    title: "Aimovig",
    amount: 812.89,
    date: new Date(2022, 9, 7),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const newExpenseDataHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onNewExpenseData={newExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
