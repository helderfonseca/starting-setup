import { ExpenseForm } from "./ExpenseForm";
import { useState } from "react";
import './NewExpense.css';

export const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  

  /*function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }*/

  let uuid = crypto.randomUUID();

  const handleExpenseData = (expenseData) => {
    const newExpenseData = {
      id: uuid,
      ...expenseData
    };
    props.onAddExpense(newExpenseData);
  };

  const openIsEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  const stopIsEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={openIsEditingHandler}>Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={handleExpenseData} onCancel={stopIsEditingHandler}/>}
    </div>
    
  );
};