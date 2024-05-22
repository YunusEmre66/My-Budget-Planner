import React, { SetStateAction, useState, useEffect } from "react";
import Edit from "./Edit";
import { ExpenseListType, ExpenseType } from "../Types";

const ExpenseList = ({expenseList,setExpenseList}:ExpenseListType) => {

  const [editItem, setEditItem] = useState<ExpenseType>({
    expenseName:"",
    expenseAmount:0,
    id: 0
   })

  const handleDelete = (id:number) => {

   
    let filteredExpense = expenseList.filter((expenseItem) => expenseItem.id !== id)

    setExpenseList(filteredExpense)

  }
  return (
    <div className={expenseList.length > 0 ? "row col col-md-8 col-lg-6 d-flex flex-column  gap-3 rounded w-50 mt-4 ps-4 " : "row d-none col col-md-8 col-lg-6 d-flex flex-column  gap-3  rounded mt-5 "}>
     
      {expenseList.map((item,index)=>{
        return (
          <div
          className="col col-md-8 col-lg-6  d-flex justify-content-between w-75 p-2  rounded"
          key={index}
          style={{backgroundColor:"#9feaec"}}
        >
          <p className="h6"> {item.expenseName} -----&gt; {item.expenseAmount}</p>
          <div>
            <i
              data-bs-toggle="modal"
              data-bs-target="#edit"
              onClick={()=>setEditItem(item)}
              className="fa-solid fa-pen-to-square mx-3"
            ></i>
            <i
              onClick={()=>handleDelete(item.id)}
              className="fa-solid fa-trash"
            ></i>
          </div>
        </div>
        )
      })}
   
    <Edit editItem={editItem} setEditItem={setEditItem} expenseList={expenseList} setExpenseList={setExpenseList}   />
    </div>
  );
};

export default ExpenseList;
