import styled from "styled-components";

export const DivContainer = styled.div`
    width: 100%;
`;

export const DivContent = styled.div``;

export const DivContentFrame = styled.div`
    width: 100%;
    height: 15px;
    background-color: lightgrey;
    border-top: ${(props) => props.sec && "1px solid"};
`;
