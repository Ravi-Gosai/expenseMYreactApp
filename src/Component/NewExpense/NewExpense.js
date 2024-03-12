import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [formDispaly, setFormDisplay] = useState(true);

  const saveExpenseDataHandeler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData,"p1")
    props.onAddExpense(expenseData);

  };

  const addExpenseBtnHandler = () => {
    setFormDisplay(false);
  };
  let onlyExpenseBtn = (
    <div className="new-expense">
      <button onClick={addExpenseBtnHandler}>Add Expense</button>
     
    </div>
      );

      if(formDispaly){
        return onlyExpenseBtn
      }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSetFormDispaly={setFormDisplay}
        onSaveExpenseData={saveExpenseDataHandeler}
      ></ExpenseForm>
    </div>
  );
}

export default NewExpense;
