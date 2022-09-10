import styled from "styled-components";

export const StyledDiv = styled.div`
    .button_criar {
        display: ${(props) => (props.passou ? "none" : "block")};
    }
`;

export const StyledInput = styled.input`
    border: solid 1.5px #9e9e9e;
    border-radius: 0.7rem;
    background: none;
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: var(--tx-p);
    margin-bottom: 16px;
`;

export const StyledSelect = styled.select`
    border: solid 1.5px #9e9e9e;
    border-radius: 0.7rem;
    background: none;
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: var(--tx-p);
    margin-bottom: 16px;
`;

export const StyledH4 = styled.h4`
    margin-top: 8px;
`;

export const StyledTextArea = styled.textarea`
    border: solid 1.5px #9e9e9e;
    border-radius: 0.7rem;
    background: none;
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: var(--tx-p);
    margin-bottom: 16px;
    resize: none;
    margin-top: 4px;
    font-family: var(--tx-f-p);
`;
