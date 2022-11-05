import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import './styles'
import { Container } from './styles'

export function TransactionsTable(){
   
    interface Transactions {
        id:number,
        title : string;
        created : number;
        category:string;
        type: string;
        amount: number;
    }
    const [transactions,setTransactions] = useState<Transactions[]>([])
    
    useEffect(() =>{
     api.get('/transactions').then((response) =>{
            console.log(response.data)
            setTransactions(response.data.transactions)
        })
        
    },[])
    
    return(
        <Container>
        <table>
            <thead>
            <tr>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </tr>
            </thead>
            <tbody>
               {
                 transactions.map(transaction =>(
                      <tr key={transaction.id}>
                            <td>{transaction?.title}</td>
                            <td className={transaction.type}>
                                { new Intl.NumberFormat('pt-BR',{
                                    style: 'currency',
                                    currency:'BRL',
                                }).format(transaction?.amount) }
                            </td>
                            <td>{transaction?.category}</td>
                            <td>
                            { new Intl.DateTimeFormat('pt-BR').format(new Date(transaction?.created)) }
                            
                            </td>
                       </tr>
                     
                 ))
                }  
            </tbody>
        </table>
    </Container>
    )
}