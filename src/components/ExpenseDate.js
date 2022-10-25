import './ExpenseDate.css';

export function ExpenseDate(props) {

  const month = props.date.toLocaleString("pt-PT", { month: 'long'});
  const day = props.date.toLocaleString("pt-PT", { day: 'numeric'});
  const year = props.date.getFullYear();

  return (
            <div className='expense-date'>
              <div className='expense-date__month'>{month}</div>
              <div className='expense-date__day'>{day}</div>
              <div className='expense-date__year'>{year}</div>
            </div>
          );
}