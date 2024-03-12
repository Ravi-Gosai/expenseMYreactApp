import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props)=>{

    const [filteredYear, setFilteredYear] = useState('2020');
    // const [filterItem, setFilterItem] = useState(props.items)
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);

      // setFilterItem(props.items.filter((ele) => ele.date.getFullYear() === +selectedYear))
      // console.log(filterItem)
    };

    const filterItems = props.items.filter((expense)=> expense.date.getFullYear().toString() === filteredYear)

   

    return(
        <li>
            <Card className="card">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

        <div id="parDiv">
          {/* {filterItems.length === 0 ? <p>no expenses found</p> : (filterItems.map((ele) => (
            <ExpenseItem {...ele} key={ele.id}></ExpenseItem>
          )))} */}

          {/* {//upar nu kam niche na mehotd thi andOperator thi agal ni condiion true hoy to and sign pachhi ni code execute thai } */}

          {/* {filterItems.length === 0 && <p> no expense found</p>}
          {filterItems.length > 0 && (filterItems.map((ele) => (
            <ExpenseItem {...ele} key={ele.id}></ExpenseItem>
          )))} */}
          <ExpenseChart expenses={filterItems}></ExpenseChart>

          <ExpenseList items={filterItems}></ExpenseList>
          {filterItems.length === 1 && <p>Only single Expense here. Please add more...</p>}
          
        </div>
        {/* <ExpenseItem {...expends}></ExpenseItem> */}
      </Card>
      </li>
        
    )
}
export default Expenses;
