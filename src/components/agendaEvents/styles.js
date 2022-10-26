import styled from "styled-components";

export const DivContainer = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 1440px;
`;

export const DivContent = styled.div`
    position: absolute;
    width: 99%;
    top: ${(props) => props.ini}%;
    height: ${(props) => (props.end - props.ini).toFixed(4)}%;
    background-color: var(--bg-t);
    margin-left: 2px;
    border: 0.25px solid rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: var(--bg-t-hover);
    }

    div {
        width: 20px;
        height: 100%;
        border-right: 0.5px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px 2px 2px 4px;
        background: ${(props) =>
            props.disponivel
                ? "#ffffff"
                : props.cancelada
                ? "red"
                : props.passou
                ? "#cccc00"
                : props.marcado && "#009900"};

        @media (max-width: 425px) {
            display: none;
        }
    }

    span {
        color: var(--tx-p-i);
        margin-left: 4px;
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        min-width: 85px;
    }

    span + span {
        margin-left: 10px;
        min-width: 70px;
    }
`;
