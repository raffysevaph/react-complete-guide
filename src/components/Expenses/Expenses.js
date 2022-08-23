import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
    </Card>
  );
};

export default Expenses;
