import styled from "styled-components";

export const DivContainer = styled.div`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    margin-right: 10px;
    top: 0;
`;

export const DivContent = styled.div`
    position: absolute;
    width: 99%;
    top: ${(props) => props.ini}%;
    height: ${(props) => (props.end - props.ini).toFixed(4)}%;
    background-color: var(--bg-t);
    margin-left: 2px;
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    align-items: baseline;
    cursor: pointer;

    span {
        color: #fff;
        margin-left: 4px;
        font-size: 14px;
        line-height: 14px;
    }

    span + span {
        margin-left: 16px;
    }
`;

export const DivNow = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    background: green;
    top: ${(props) => props.ini}%;

    svg {
        color: green;
        width: 8px;
        height: 10px;
        transform: scale(3) translateX(0.5px) translateY(-3.8px);
        cursor: default;
    }
`;
