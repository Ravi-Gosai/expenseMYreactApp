
import './App.css';
import ExpenseItem from './Component/ExpenseItem';
import Card from './Component/Card';
import NewExpense from './Component/NewExpense';
import { useState } from 'react';


const App = ()=> {
  // const expends = {
  //   id:1,
  //   title:"car insurance !",
  //   amount : 264.55,
  //   date : new Date(2023,3,15),
  //   location : 'moive 1'
  // }

  const expends = [
    {
      id:1,
      title:"car insurance !",
      amount : 264444.55,
      date : new Date(2023,6,16)
      // location : 'manali'
    },
    {
      id:2,
      title:"bike insurance !",
      amount : 264.55,
      date : new Date(2023,4,15)
      // location : 'junagadh'
    },
    {
      id:3,
      title:"truck insurance !",
      amount : 444.55,
      date : new Date(2023,3,12)
      // location : 'mumbai'
    },
    {
      id:4,
      title:"cycle insurance !",
      amount : 2644.55,
      date : new Date(2023,3,15)
      // location : 'goa'
    }
  ]

  const [expendsDataCurr,setExpendsDataCurr]= useState(expends)



  const addExpensehandler = expense =>{
    console.log(" In app.js ");
    console.log(expense)
    setExpendsDataCurr(()=>{
      return [...expendsDataCurr,expense]
    })
  }
  return (
   <Card className="card">

     {/* <h1>let get strated</h1> */}
     <NewExpense onAddExpense={addExpensehandler}></NewExpense>
     
     <div id = "parDiv">
     {expendsDataCurr.map(ele=><ExpenseItem {...ele} key={ele.id}></ExpenseItem>)}
     </div>
     {/* <ExpenseItem {...expends}></ExpenseItem> */}
     </Card>
 
  );
}

export default App;
