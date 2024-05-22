export type ExpenseType ={
    expenseName:string,
    expenseAmount:number,
    id: number
}

export type AddExpenseType = {
    expense:ExpenseType,
    setExpense:React.Dispatch<React.SetStateAction<ExpenseType>>,
    expenseList:ExpenseType[],
    setExpenseList:React.Dispatch<React.SetStateAction<ExpenseType[]>>
}

export type ExpenseListType = {
    expenseList:ExpenseType[],
    setExpenseList:React.Dispatch<React.SetStateAction<ExpenseType[]>>
}