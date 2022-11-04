import styled from "styled-components";
import { darken,transparentize } from "polished";
export const Container = styled.form`
    h2{
        color: var(--text-body);
        font-size:1.5rem;
        margin-bottom:2rem;
        text-align: center;
        
    }
    
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;
        
        &::placeholder{
            color: var(--text-body);
        }
        
        & + input{
            margin-top: 1rem;
        }
    }
    
    button[type='submit']{
        width: 100%;
        padding: 0 1.5rem;
        border-radius: 0.24rem;
        height: 4rem;
        background-color:var(--green);
        color:white;
        font-weight: 400;
        font-size: 1rem;
        margin-top: 1.5rem;
        outline: none;
        border:none;
    }
    
`

export const TransactionTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 0.5rem;

` 

interface RadioBoxProps {
    isActive: boolean;
    // activeColor: keyof typeof colors;
    activeColor: "green"|"red";
}


const colors = {
    green: '#33CC95',
    red: '#E62E4D'
};

export const RadioBox = styled.button<RadioBoxProps>`
 
    background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'
    };
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.2s;
    
    &:hover{
        border-color: ${darken(0.1,'#d7d7d7')};
    }
    
    img {
        width:20px;
        height: 20px;
    }

    span {
        display:inline-block;
        margin-left: 1rem;
    }

 
`
