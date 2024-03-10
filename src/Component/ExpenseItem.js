import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css'
import { useState } from 'react';


function ExpenseItem(props){

    const [title,setTitle] = useState(props.title)

    const [expense, setExpense] = useState(props.amount)

    const clickHandlerTitle = () =>{
        setTitle('Updated')
    }

    const clickHandlerExpense = () =>{
        setExpense('100 $')
    }
    
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
            <ExpenseDetails title={title}
                 amount={expense} 
                // location={props.location}
                >

                </ExpenseDetails>
            <button onClick={clickHandler}> delete</button>
            <button onClick={clickHandlerTitle}>Change Title</button>
            <button onClick={clickHandlerExpense}>Change Expense</button>
            
        </div>
    )
}

export default ExpenseItem;