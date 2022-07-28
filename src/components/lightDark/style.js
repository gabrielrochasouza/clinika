import styled from "styled-components";

export const LightDarkContainer = styled.div`
    position: fixed;
    bottom: 12px;
    right: 12px;
    svg{
        font-size: 35px;
        padding: 5px;
        border-radius: 50%;
        background-color: var(--bg-t);
        color: var(--tx-w);
        transition: 1s all;
        :hover{
            transition: 1s all;
            background-color: var(--bg-t-hover);
            color: var(--tx-w);
        }
    }
    
`