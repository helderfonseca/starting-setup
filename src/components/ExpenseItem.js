import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

export function ExpenseItem(props) {

  /*const month = props.expenses.date.toLocaleString("pt-PT", { month: 'long'});
  const day = props.expenses.date.toLocaleString("pt-PT", { day: '2 digit'});
  const year = props.expenses.date.getFullYear();*/

  return (
    props.expenses && props.expenses.map(expense => {
    return  <div key={expense.id} className='expense-item'>
              <ExpenseDate date={expense.date}/>
              <div className='expense-item__description'>
                <h2>{expense.title}</h2>
                <div className='expense-item__price'>${expense.price}</div>
              </div>
            </div>
    })
  );
}