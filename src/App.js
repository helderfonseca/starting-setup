import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const App = () => {

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
    },
    {
      id: 'e3',
      title: 'TV',
      price: 96.53,
      date: new Date(2020, 7, 22)
    }
  ];

  const addExpenseData = expense => {
    console.log("In App.js");
    //console.log(expense);
    expenses.unshift(expense);
    console.log(expenses);
  }

  return (
    <div className="app">
      <h2>Coffee Shop</h2>
      <NewExpense onAddExpense={addExpenseData}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
