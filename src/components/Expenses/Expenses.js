import { useState } from "react";
import { ExpensesFilter } from "./ExpensesFilter";
import { Card } from '../UI/Card';
import './Expenses.css';
import { ExpensesList } from "./ExpensesList";


export const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2022');

  const filteredYearHandler = selectedYear => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear() === +selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilterYear={filteredYearHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}