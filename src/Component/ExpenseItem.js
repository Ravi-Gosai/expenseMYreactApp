import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'


function ExpenseItem(props){
    // const expenseDate = new Date(2021,2,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 264.55;
    // const locationOfExpenditure = 'moive'

    
    return (
        <div className="expense-item"> 
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
           
        </div>
    )
}

export default ExpenseItem;