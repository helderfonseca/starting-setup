import { ExpenseItem } from "./ExpenseItem";
import { Card } from '../UI/Card';
import './Expenses.css';

export const Expenses = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Seguros de carros',
      price: 250.60,
      date: new Date(2020, 2, 27)
    }, 
    {
      id: 'e2',
      title: 'Comida',
      price: 180.86,
      date: new Date(2021, 4, 15)
    }
  ];



  return (
    <Card className="expenses">
      <ExpenseItem expenses={expenses}/>
    </Card>
  );
}