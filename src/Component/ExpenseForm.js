import './ExpenseForm.css'
import { useState } from 'react'
function ExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
    }
    const amountChangehandler = (event) =>{
        setEnteredAmount(event.target.value)
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangehandler}></input>
                </div>
               

            </div>

            <button type="submit">Add Expense</button>
        </form>


    )
}

export default ExpenseForm;