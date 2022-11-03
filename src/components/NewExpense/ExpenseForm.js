import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = (props) => {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitle = event => {
    setTitle(event.target.value);
  }

  const handleAmount = event => {
    setAmount(event.target.value);
  }

  const handleDate = event => {
    setDate(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (title.length === 0) {
      return;
    }

    if (amount.length === 0) {
      return;
    }

    const expenseData = {
      title: title,
      price: +amount,
      date: new Date(date)
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.onSaveExpenseData(expenseData);
    props.onCancel();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new_expense__controls'>
        <div className='new_expense__control'>
          <label htmlFor="expense_title">Title</label>
          <input type="text" 
                  name="expense_title" 
                  id="expense_title"
                  required
                  value={title}
                  onChange={handleTitle} />
        </div>
        <div className='new_expense__control'>
          <label htmlFor="expense_amount">Amount</label>
          <input type="number" 
                  name="expense_amount" 
                  id="expense_amount" 
                  required
                  value={amount}
                  min="0.01" step="0.01" 
                  onChange={handleAmount} />
        </div>
        <div className='new_expense__control'>
          <label htmlFor="expense_date">Date</label>
          <input type="date" 
                  name="expense_date" 
                  id="expense_date" 
                  value={date}
                  min="01-01-2019" max="31-12-2022" 
                  onChange={handleDate} />
        </div>
        <div className='new_expense__actions'>
          <button type='submit'>Add expense</button>
        </div>
      </div>
    </form>
  );
};