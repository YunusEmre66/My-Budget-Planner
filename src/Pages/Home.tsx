import { useState } from "react";
import AddExpenses from "../components/AddExpenses";
import Budget from "../components/Budget";
import ExpenseList from "../components/ExpenseList";
import "./home.css";
import { ExpenseType } from "../Types";


const Home = () => {
   const [expense, setExpense] = useState<ExpenseType>({
    expenseName:"",
    expenseAmount:0,
    id: Date.now()
   })

   const [expenseList, setExpenseList] = useState<ExpenseType[] | []>([])
    
  return (
    <div className='mx-auto col col-sm-4 col-md-6 col-lg-8 contentWrapper rounded px-3'>
      <Budget expenseList={expenseList}  />
      <div className='d-flex gap-1 mt-2'>
      
        <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList} />
        <AddExpenses expense={expense} setExpense={setExpense} expenseList={expenseList} setExpenseList={setExpenseList} />
      </div>
        
        
    </div>
  )
}

export default Home