import './ExpensesFilter.css';

export const ExpensesFilter = (props) => {

  const changeYearHandler = event => {
    //console.log(event.target.value);
    props.onFilterYear(event.target.value);

    console.log("ExpensesFilter");
    console.log(props.selected);
  }

  return (
    <div className='expense-filter'>
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={changeYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
}