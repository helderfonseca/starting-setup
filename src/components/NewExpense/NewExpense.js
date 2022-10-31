import { ExpenseForm } from "./ExpenseForm";
import './ExpenseForm.css';

export const NewExpense = (props) => {

  /*function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }*/

  let uuid = crypto.randomUUID();

  const handleExpenseData = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: uuid
    };
    props.onAddExpense(newExpenseData);
    //console.log("Expense from new Expense Component: ", newExpenseData);
  };

  return (
    <div className="new_expense">
      <ExpenseForm onSaveExpenseData={handleExpenseData}/>
    </div>
    
  );
};