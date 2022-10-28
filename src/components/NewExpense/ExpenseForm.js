import './ExpenseForm.css';

export const ExpenseForm = () => {

  const handleChange = event => {
    console.log(event.target.value);
  }



  return (
    <form>
      <div className='new_expense__controls'>
        <div className='new_expense__control'>
          <label htmlFor="expense_title">Title</label>
          <input type="text" name="expense_title" id="expense_title" onChange={handleChange}/>
        </div>
        <div className='new_expense__control'>
          <label htmlFor="expense_amount">Amount</label>
          <input type="number" name="expense_amount" id="expense_amount" min="0.01" step="0.01" />
        </div>
        <div className='new_expense__control'>
          <label htmlFor="expense_date">Date</label>
          <input type="date" name="expense_date" id="expense_date" min="01-01-2019" max="31-12-2022" />
        </div>
        <div className='new_expense__actions'>
          <button type='submit'>Add expense</button>
        </div>
      </div>
    </form>
  );
};