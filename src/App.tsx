
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewModalTransaction } from './components/NewTransactionModal';
import { GlobalStyle } from './style/global';



function App() {
  const [isNewModalTransactionOpen, setIsNewModalTransactionOpen] = useState(false);

  
  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true);
  }
    
  function handleCloseNewTransactionModal() {
      setIsNewModalTransactionOpen(false);
  }

  return(
   <> 
    <GlobalStyle/>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard/>
    <NewModalTransaction isOpen={isNewModalTransactionOpen} onRequestClose={handleCloseNewTransactionModal}/>
    </>
   )
}

export default App;
