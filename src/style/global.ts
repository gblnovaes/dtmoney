import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F0F2F5;
        --red:#E62E4D;
        --green:#33CC95;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --text-title:#969CB3;
        --text-body:#363F5F;
        --shape:#FFFFFF;
    }
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background-color: var(--background);
        -webkit-font-smoonthing:antialising;
    }
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }   
        @media (max-width: 720px) {
            font-size: 87.5%;
        } 
    }
    
    button{
        cursor: pointer;
    }
    
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    body,input,text-area,button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1,h2,h3,h4,h5,h6,strong{
       font-weight:600 ;
    }
    
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0; 
        right: 0;
        bottom: 0;
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }
    
    .react-modal-close {
        position: absolute;
        right: 1.5em;
        top: 1.5em;
        border:0;
        background-color: transparent;
        
        transition: filter 0.2s;
        
        &:hover{
            filter: brightness(0.7);
        }
    }
    
`