import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isAddToggle, setIsAddToggle] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const addExpenseHandler = () => {
    setIsAddToggle(true);
  };

  const cancelAddExpenseHandler = () => {
    setIsAddToggle(false);
  };

  return (
    <div className="new-expense">
      {!isAddToggle && (
        <button type="button" onClick={addExpenseHandler}>
          Add New Expense
        </button>
      )}
      {isAddToggle && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelAddExpense={cancelAddExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
