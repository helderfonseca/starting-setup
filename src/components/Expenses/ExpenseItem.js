import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

export const ExpenseItem = (props) => {

 const [titless, setTitle] = useState([]);

  //let title = props.expenses[0].title;

  function handleClick(e) {
    e.preventDefault();
    //setTitle("sjdd");
    props.expenses.forEach(item => {
      //setTitle(item.title);
      setTitle(item.title);
    });
  }

  return (

   
    props.expenses && props.expenses.map(expense => {
    return  <Card key={expense.id} className='expense-item'>
              <ExpenseDate date={expense.date} />
              <div className='expense-item__description'>
                <h2>{titless}</h2>
                <div className='expense-item__price'>${expense.price}</div>
              </div>
              <button onClick={handleClick}>Change title</button>
            </Card>
    })
  );
}