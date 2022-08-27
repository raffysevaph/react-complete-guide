import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
      {/* {expensesContent} */}
      {/* {filteredExpenses.length === 0 && <p style={{ color: "white" }}>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)} */}

      {/* {filteredExpenses.length === 0 ? (
        <p style={{ color: "white" }}>No expenses found</p>
      ) : (
        filteredExpenses.map((expense) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)
      )} */}
    </Card>
  );
};

export default Expenses;
