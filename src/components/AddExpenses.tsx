import { AddExpenseType } from "../Types";

const AddExpenses = ({ expense, setExpense,expenseList, setExpenseList }: AddExpenseType): JSX.Element => {



  const handleAdd = () => {
    setExpense({...expense, id:new Date().getTime() });
    setExpenseList([...expenseList, expense])
    setExpense({
        expenseName:"",
        expenseAmount:0,
        id: Date.now()
    })

  }



  return (
    <>

      <div className={expenseList.length < 1 ? "col col-md-8 col-lg-12 d-flex flex-column  gap-3 rounded mx-auto  p-3" :
        "col col-md-8 col-lg-6 d-flex flex-column  gap-3 p-3 rounded"}>
        <div className="w-100 text-start h5">
          <label htmlFor="add">Expense Name</label>
          <input className='form-control mt-2 p-1' type="text" id="add"
            value={(expense?.expenseName) ? (expense?.expenseName) : ("")}
            onChange={(e) => setExpense({ ...expense, expenseName: e.target.value })} />
        </div>
        <div className="w-100 text-start h5">
          <label htmlFor="cost">Amount</label>
          <input className='form-control mt-2 p-1' type="number" id="cost"
          value={(expense?.expenseAmount) ? (expense?.expenseAmount) : ("")}
          onChange={(e) => setExpense({ ...expense, expenseAmount: Number(e.target.value) })} /> 
        </div>
        <div className="w-100">
          <button className="w-100 btn btn-primary p-1" onClick={handleAdd} >Add</button>
        </div>
      </div>

    </>
  );
};

export default AddExpenses;
