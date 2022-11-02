import { useState } from "react";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from '../UI/Card';
import './Expenses.css';


export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const filteredYearHandler = filteredYear => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === +selectedYear);

  let expenses = filteredExpenses
                      .map(expense => 
                      <ExpenseItem key={expense.id} item={expense} />);

  if (filteredExpenses.length === 0) {
    expenses = <p>No Expenses</p>
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterYear={filteredYearHandler} />
      {expenses}
    </Card>
  );
}