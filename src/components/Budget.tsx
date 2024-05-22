import React, { useState } from "react";
import { ExpenseType } from "../Types";

type BudgetType = {
  expenseList:ExpenseType[]
}

const Budget = ({expenseList}:BudgetType) => {
  const [budget, setBudget] = useState<number | null>(null)
  const [toggle, setToggle] = useState<boolean>(true)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setBudget(Number(e.target.value))
  }

  let total:number = expenseList.reduce((a,b) => a + b.expenseAmount, 0);

  
  return (
    <>
      <h1 className="text-center mb-3" style={{color:"#004e92"}}>My Budget Planner</h1>
      <div className="row d-flex justify-content-between m-0 p-0 ">
        <div className="col col-sm-12 col-md-8 col-lg-4  d-flex justify-content-between gap-4 ps-2 pe-3 py-2 rounded" style={{color:"#0d511d", backgroundColor:"#9feaec"}}>
          <input
            className="form-control w-75 p-1"
            disabled={!toggle} // burası dinamik olacak, bütçe girilip kaydedildiğinde true olması lazım
            type="number"
            onChange={handleChange}
            placeholder="Type your budget here !"
          />
          <button className="btn btn-primary w-25" onClick={()=>setToggle(!toggle)}>
            {toggle ? "Save" : "Edit"}
          </button>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-3 rounded ps-2 pt-1" style={{color:"#0d511d", backgroundColor:"#adfabf"}}>
          <p className="h5"> Remaining: {budget && budget-total}  </p>
        </div>
        <div className=" col col-sm-12 col-md-8 col-lg-4 rounded ps-2 pt-1" style={{color:"#b00f3f",backgroundColor:"#ffa4b7" }}>
          <p className="h5"> Total spent so far: {total} </p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Budget;
