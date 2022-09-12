import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100%;
`;

export const DivContent = styled.div``;

export const DivContentFrame = styled.div`
    width: 100%;
    height: 15px;
    background-color: var(--bg-s);
    border-top: ${(props) => props.sec && "0.5px solid #6969696e"};
`;
