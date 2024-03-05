import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'


function ExpenseItem(props){
    
    function clickHandler(e){
        console.log(e.target)
        console.log(e.target.parentElement, "ppp")
        const mainDiv = document.getElementById('parDiv');
        let currDiv = e.target.parentElement;
        mainDiv.removeChild(currDiv)


    }
    
    return (
        <div className="expense-item"> 
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails>
            <button onClick={clickHandler}> delete</button>
           
        </div>
    )
}

export default ExpenseItem;