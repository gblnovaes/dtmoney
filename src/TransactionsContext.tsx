import { createContext, ReactNode, useEffect, useState } from "react";
import { TransactionsTable } from "./components/TransactionsTable";
import { api } from "./services/api";

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData)

interface TransactionsProps {
    children:ReactNode
}
interface Transaction {
    id:number,
    title : string;
    created : number;
    category:string;
    type: string;
    amount: number;
}
/* 
interface TransactionInput {
    title : string;
    created : number;
    category:string;
    type: string;
} */
type TransactionInput = Omit<Transaction ,'id'|'created'>


interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (trasaction: TransactionInput) => void
}

export function TransactionProvider({children } : TransactionsProps){
    const [transactions,setTransactions] =  useState<Transaction[]>([])

    useEffect(() =>{
        api.get('/transactions').then((response) =>{
               console.log(response.data)
               setTransactions(response.data.transactions)
           })
           
       },[])

       function createTransaction(transaction : TransactionInput){
 
        api.post('/transactions', transaction)
       }
       
       return(
            <TransactionContext.Provider value={{ transactions,createTransaction }}>
                {
                    children
                }
            </TransactionContext.Provider>
       )
}