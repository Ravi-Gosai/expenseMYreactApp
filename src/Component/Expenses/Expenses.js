import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props)=>{

    const [filteredYear, setFilteredYear] = useState('2020');
    const [filterItem, setFilterItem] = useState(props.items)
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
      setFilterItem(props.items.filter((ele) => ele.date.getFullYear() === +selectedYear))
      console.log(filterItem)
    };
    return(
        <div>
            <Card className="card">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

        <div id="parDiv">
          {filterItem.map((ele) => (
            <ExpenseItem {...ele} key={ele.id}></ExpenseItem>
          ))}
        </div>
        {/* <ExpenseItem {...expends}></ExpenseItem> */}
      </Card>
        </div>
        
    )
}
export default Expenses;
