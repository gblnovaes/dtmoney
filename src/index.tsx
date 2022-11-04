import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs'


createServer({
  models: {
    transaction: Model,
  },
  
  
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title: "Freelancer web site",
          type:'deposit',
          category: 'Desenvolvimento',
          amount:6000,
          created: new Date("2022-10-20")
        },
        {
          id:2,
          title: "Freelancer aplicativo de consulta de chamados",
          type:'deposit',
          category: 'Desenvolvimento',
          amount:3400,
          created: new Date("2022-10-20")
        },
        {
          id:3,
          title: "Freelancer aplicativo de venda de bebidas",
          type:'deposit',
          category: 'Desenvolvimento',
          amount:5000,
          created: new Date("2022-10-20")
          
        },
        {
          id:4,
          title: "Pagamento de imposto de notas",
          type:'withdraw',
          category: 'Despesas',
          amount:4999,
          created: new Date("2022-10-20")
        }
          
      ]
    })
  },
  
  
  routes() {
      this.namespace = '/api'
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
      
      this.post('/transactions',(schema,request) =>{
        const data = JSON.parse(request.requestBody);
        return schema.create("transaction",data);
      })
  },
})
 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
