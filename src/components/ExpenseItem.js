import './ExpenseItem.css'

export function ExpenseItem({expenses}) {

  /*const expenseDate = new Date(2020, 4, 28);
  const expenseTitle = "Seguro de carros";
  const expensePrice = 250.60;*/

  return (
    expenses && expenses.map(expense => {
    return  <div key={expense.id} className='expense-item'>
              <div>{expense.date.toLocaleDateString("pt-PT")}</div>
              <div className='expense-item__description'>
                <h2>{expense.title}</h2>
                <div className='expense-item__price'>${expense.price}</div>
              </div>
            </div>
    })
  );
}