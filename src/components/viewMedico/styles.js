import styled from "styled-components";

export const AsideContainer = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-p);
    color: var(--tx-p);
    border-radius: 20px;
    padding: 10px;

    @media (min-width: 768px) {
        width: 45%;
    }
    @media (min-width: 1150px) {
        width: 35%;
    }

    .container-img {
        width: 400px;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .container-info-nome {
            font-size: 32px;
        }

        .container-info-especialidade {
            font-size: 20px;
        }

        .config-img {
            width: 50%;
            height: 50%;
            background-color: var(--bg-s);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            border-radius: 50%;
        }
    }

    .container-contato {
        color: var(--tx-p);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;

        

        
        .container-contato-telefone {}
        .container-contato-email {}
    }

`

export const MainContainer = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: var(--bg-p);
    border-radius: 20px;
    padding: 10px;

`