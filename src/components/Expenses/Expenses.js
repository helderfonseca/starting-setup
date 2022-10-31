import { useState } from "react";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from '../UI/Card';
import './Expenses.css';


export const Expenses = (props) => {

  const [selected, setSelected] = useState('2022');
  const expenses = props.items;

  const filteredYearHandler = filteredYear => {
    setSelected(filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selected} onFilterYear={filteredYearHandler}/>
      <ExpenseItem selected={selected} expenses={expenses}/>
    </Card>
  );
}