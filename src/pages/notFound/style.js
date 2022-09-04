import styled from "styled-components";

export const NotFound = styled.main`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        text-align: center;
        max-width: 400px;
        padding: 0 15px;
        width: 100%;
        h1{
            color: var(--tx-p);
        }
        button{
            margin: 20px 0 0;
            padding: 10px 20px;
        }
        svg{
            border: 2px solid var(--tx-t);
            border-radius: 50%;
            padding: 10px;
            font-size: 10rem;
            color: var(--tx-t);
        }
    }
`
