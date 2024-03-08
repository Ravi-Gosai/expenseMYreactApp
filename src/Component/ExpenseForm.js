import './ExpenseForm.css'

function ExpenseForm(){
    const titleChange = (event) =>{
        console.log(event.target.value)
    }
    return(
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChange}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'></input>
                </div>
               

            </div>

            <button type="submit">Add Expense</button>
        </form>


    )
}

export default ExpenseForm;