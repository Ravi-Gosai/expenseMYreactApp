import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
function NewExpense(props){

    const saveExpenseDataHandeler = (enteredExpenseData) =>{

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData,"p1")
        props.onAddExpense(expenseData)
    }    
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandeler}></ExpenseForm>
        </div>
    )
}


export default NewExpense;