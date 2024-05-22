import React, { SetStateAction } from "react";
import { ExpenseType } from "../Types";


type EditType = {
    editItem:ExpenseType,
    setEditItem:React.Dispatch<React.SetStateAction<ExpenseType>>,
    expenseList:ExpenseType[],
    setExpenseList:React.Dispatch<React.SetStateAction<ExpenseType[]>>
}

const Edit = ({editItem,setEditItem,expenseList,setExpenseList}:EditType) => {
 
const handleEdit = (id:number) => {
  let tempArr = expenseList.map((item)=> {
    if(item.id === id){
      item = editItem
      return item
    }
    else{
      return item
    }
  })
  setExpenseList(tempArr)

}



  
  return (
    <div>
      <div className="modal fade" id="edit" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{backgroundColor:"#c9c7c7"}}>
            <div className="modal-header">
              <h5 className="modal-title text-danger h4" id="exampleModalLongTitle">
                Edit Your Expense List
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body w-100">
              <div>
                <label className="h5" htmlFor="expensename">Edit Expense Name</label><br/>
                <input
                  className="w-100 form-control"
                  type="text"
                  onChange={(e)=>setEditItem({...editItem, expenseName:e.target.value})}
                  id="expensename"
                  name="expenseName"
                  value={editItem.expenseName}
               
                />
              </div>
              <div className="mt-4">
                <label className="h5" htmlFor="expensecost">Edit Amount</label><br/>

                <input
                className="w-100 form-control"
                  type="text"
                  name="expenseCost"
                  onChange={(e)=>setEditItem({...editItem, expenseAmount:Number(e.target.value)})}
                  id="expensecost"
                  value={editItem.expenseAmount}
                 

                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={()=>handleEdit(editItem.id)}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
