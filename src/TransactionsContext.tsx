import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

export const TransactionContext = createContext<Transactions[]>([])

interface TransactionsProps {
    children:ReactNode
}
interface Transactions {
    id:number,
    title : string;
    created : number;
    category:string;
    type: string;
    amount: number;
}

export function TransactionProvider({children } : TransactionsProps){
    const [transactions,setTransactions] = useState<Transactions[]>([])

    useEffect(() =>{
        api.get('/transactions').then((response) =>{
               console.log(response.data)
               setTransactions(response.data.transactions)
           })
           
       },[])
       
       return(
            <TransactionContext.Provider value={transactions}>
                {
                    children
                }
            </TransactionContext.Provider>
       )
}