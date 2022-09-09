import styled from "styled-components";

export const Div = styled.div`
    width: 98%;
    height: 100%;
    max-height: 350px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 1680px) {
        max-height: 400px;
    }

    button {
        margin-bottom: 10px;;
    }
`;

export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border: 8px solid var(--border);
    border-radius: 8px;
    margin-bottom: 1%;
`;

export const DivContent = styled.div`
    display: flex;
    width: 100%;
`;

export const DivBody = styled.div`
    width: 100%;
    position: relative;
`;
