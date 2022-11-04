import { Container } from './styles'
import Icomming from '../../assets/entradas.svg';
import OutComming from '../../assets/saidas.svg';
import TotalIcomming from '../../assets/total.svg';
 export default function Summary(){
    return(
       <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Icomming} alt="Entradas" />
                </header>
                <strong className='deposit'>R$100.000</strong>
            </div>
            
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={OutComming} alt="Saidas" />
                </header>
                <strong className='withdraw'> - R$10.000</strong>
            </div>
            
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={TotalIcomming} alt="Total" />
                </header>
                <strong>R$100.000</strong>
            </div>
       </Container>
    )
}