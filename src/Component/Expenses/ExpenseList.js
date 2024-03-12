import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';
const ExpenseList = props => {


    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>No Epenses Found </h2>
    }
     
          return(
        <ul className='expenses-list'>
            {
                props.items.map((ele) => (
                    <ExpenseItem {...ele} key={ele.id}></ExpenseItem>
                  ))
            }
        </ul>
     )
}
export default ExpenseList;