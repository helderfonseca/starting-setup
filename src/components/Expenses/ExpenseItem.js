import { ExpenseDate } from './ExpenseDate';
import { Card } from '../UI/Card';
import './ExpenseItem.css';

export const ExpenseItem = (props) => {

  return (
   
    props.expenses && props.expenses.map(expense => {
    return  <Card key={expense.id} className='expense-item'>
              <ExpenseDate date={expense.date} />
              <div className='expense-item__description'>
                <h2>{expense.title}</h2>
                <div className='expense-item__price'>${expense.price}</div>
              </div>
              <button>Change title</button>
            </Card>
    })
  );
}