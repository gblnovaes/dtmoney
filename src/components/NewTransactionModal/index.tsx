
import Modal from 'react-modal';
import './styles'
import { Container ,TransactionTypeContainer,RadioBox} from './styles';
import closeImg from '../../assets/close.svg'
import Incoming from '../../assets/entradas.svg'
import Outcoming from '../../assets/saidas.svg'
import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';
import { TransactionContext } from '../../TransactionsContext';
 
interface NewTransactionModalProps{
    isOpen: boolean
    onRequestClose: () => void
}

export function NewModalTransaction({isOpen,onRequestClose} : NewTransactionModalProps) {
    Modal.setAppElement('#root')  

    
    const [type,setType] = useState('deposit')
    const [title,setTitle] = useState('')
    const [category,setCategory] = useState('')
    const [amount,setAmount] = useState(0)

    const {createTransaction} = useContext(TransactionContext)
    
    function handleCreateNewTransaction(event : FormEvent){
        event.preventDefault()
        
        createTransaction({
            title,
            type,
            amount,
            category
        })
            
        onRequestClose()
    }
    
    return(
        
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            
            <button onClick={onRequestClose}>
                <img src={closeImg} 
                alt="Fechar Modal" 
                className='react-modal-close'
                />
            </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Nova transacao</h2>
                <input type="text"  placeholder='Titulo'  value={title} onChange={(event) => setTitle(event.target.value)}/>
                <input type="number" placeholder='Valor' value={amount}  onChange={(event) => setAmount(Number(event.target.value)) }/>
                
                <TransactionTypeContainer>
                    <RadioBox type='button' 
                    activeColor='green'
                    isActive ={ type === 'deposit'}
                    onClick={() => {setType('deposit')}}>
                        <img src={Incoming} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox type='button' 
                    activeColor='red'
                    isActive ={ type === 'withdraw'}
                    onClick={ () => {setType('withdraw')} }>
                        <img src={Outcoming} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                    
                </TransactionTypeContainer>
                
                <input type="text" placeholder='Categoria' value={category} onChange={  (event) => setCategory(event.target.value)}/>

                <button type="submit">Cadastrar</button>
            </Container>
            
        </Modal>       
    )
}