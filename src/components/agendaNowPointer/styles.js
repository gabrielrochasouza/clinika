import styled from "styled-components";

export const DivNow = styled.div`
    position: absolute;
    width: 100%;
    height: 1px;
    background: ${(props) => (props.inv ? "transparent" : "var(--bg-t-i)")};
    top: ${(props) => props.ini}%;

    svg {
        color: ${(props) => (props.inv ? "transparent" : "var(--bg-t-i)")};
        width: 8px;
        height: 10px;
        transform: scale(3) translateX(0.5px) translateY(-3.8px);
        cursor: default;
    }
`;
