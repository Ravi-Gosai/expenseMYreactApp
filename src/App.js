
import './App.css';
import ExpenseItem from './Component/ExpenseItem';

function App() {
  // const expends = {
  //   id:1,
  //   title:"car insurance !",
  //   amount : 264.55,
  //   date : new Date(2023,3,15),
  //   expendLoc : 'moive 1'
  // }

  const expends = [
    {
      id:1,
      title:"car insurance !",
      amount : 264444.55,
      date : new Date(2023,6,16),
      expendLoc : 'manali'
    },
    {
      id:2,
      title:"bike insurance !",
      amount : 264.55,
      date : new Date(2023,4,15),
      expendLoc : 'junagadh'
    },
    {
      id:3,
      title:"truck insurance !",
      amount : 444.55,
      date : new Date(2023,3,12),
      expendLoc : 'mumbai'
    },
    {
      id:4,
      title:"cycle insurance !",
      amount : 2644.55,
      date : new Date(2023,3,15),
      expendLoc : 'goa'
    }
  ]
  return (
   <div>

     <h1>let get strated</h1>
     {expends.map(ele=><ExpenseItem {...ele} key={ele.id}></ExpenseItem>)}
     {/* <ExpenseItem {...expends}></ExpenseItem> */}
   </div>
 
  );
}

export default App;
