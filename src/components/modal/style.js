import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100vw;
    z-index: 20;
    padding: 40px 20px;
    min-height:100vh;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    .modal-box{
        background-color: var(--bg-s);
        color: var(--tx-p);
        max-width: 520px;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        animation: scaleUp 1s;
    }
    .modal-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--bg-s);
        padding: 16px;
        border-bottom: 1px solid var(--bg-p);
    }
    .modal-body{
        padding: 20px 16px 16px;
    }

    @keyframes scaleUp {
        from{
            transform: scale(0);
            opacity: 0;
        }
        to{
            transform: scale(1);
            opacity: 1;
        }
    }
`
