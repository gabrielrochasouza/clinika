import styled from "styled-components";


export const ButtonContainer = styled.button`
    width: 100%;
    padding: 15px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${(props)=>props.disabled ? 'var(--bg-t-hover)':'var(--bg-t)'};
    svg{
        transition: 1s all;
        color: var(--tx-w);
        animation: rotate 1s infinite linear;
    }
    @keyframes rotate {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
` 