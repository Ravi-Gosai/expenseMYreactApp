import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props)=>{

    const [filteredYear, setFilteredYear] = useState('2020');
    // const [filterItem, setFilterItem] = useState(props.items)
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);

      // setFilterItem(props.items.filter((ele) => ele.date.getFullYear() === +selectedYear))
      // console.log(filterItem)
    };

    const filterItems = props.items.filter((expense)=> expense.date.getFullYear().toString() === filteredYear)

    // aa method pn easy to use chhe niche aapde biji 2 mehtod joi chhe
    let expenseContent = <p> no expenses found</p>;

    if(filterItems.length > 0){
      expenseContent = filterItems.map((ele) => (
        <ExpenseItem {...ele} key={ele.id}></ExpenseItem>
      ))
    }

    return(
        <div>
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

          {expenseContent}
          {filterItems.length === 1 && <p>Only single Expense here. Please add more...</p>}
          
        </div>
        {/* <ExpenseItem {...expends}></ExpenseItem> */}
      </Card>
        </div>
        
    )
}
export default Expenses;
