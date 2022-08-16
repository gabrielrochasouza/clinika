import styled from "styled-components";


export const SearchInputContainer = styled.form`
    border-radius: 40px;
    padding: 2px 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline-block;
    background-color: var(--bg-p);
    svg{
        font-size: 16px;
        color: var(--tx-p);
        cursor: pointer;
    }
    :hover input, input:focus{
        display: initial;
        width: 150px;
        transition: 1s all;
    }
    input{
        color: var(--tx-p);
        margin: 0 0 0 5px;
        transition: 1s all;
        outline: 0;
        border: 0;
        width: 0;
        background-color: transparent;
        border-bottom: 1px solid var(--tx-t);
        
    }
`  

