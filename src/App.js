import "./App.css";

import NewExpense from "./Component/NewExpense/NewExpense";
import { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";

const App = () => {
  // const expends = {
  //   id:1,
  //   title:"car insurance !",
  //   amount : 264.55,
  //   date : new Date(2023,3,15),
  //   location : 'moive 1'
  // }

  const dummy_expenses = [
    {
      id: 1,
      title: "car insurance !",
      amount: 264444.55,
      date: new Date(2023, 6, 16),
      // location : 'manali'
    },
    {
      id: 2,
      title: "bike insurance !",
      amount: 264.55,
      date: new Date(2023, 4, 15),
      // location : 'junagadh'
    },
    {
      id: 3,
      title: "truck insurance !",
      amount: 444.55,
      date: new Date(2023, 3, 12),
      // location : 'mumbai'
    },
    {
      id: 4,
      title: "cycle insurance !",
      amount: 2644.55,
      date: new Date(2023, 3, 15),
      // location : 'goa'
    },
  ];

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpensehandler = (expense) => {
    console.log(" In app.js ");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
