import styled from "styled-components";

export const StyledDiv = styled.div`
    .button_criar {
        display: ${(props) => (props.passou ? "none" : "block")};
    }
    .paciente-list{
        position: relative;
        :focus-within ul, ul:hover{
            visibility:visible;
        }
        ul{
            z-index: 20;
            visibility: hidden;
            overflow: auto;
            max-height: 150px;
            position: absolute;
            top: 47px;
            color: var(--tx-p);
            background-color: var(--bg-p);
            width: 100%;
            padding: 10px 0;
            li{
                cursor: pointer;
                padding: 4px 12px;
                :hover{
                    background-color: var(--bg-s);
                }
            }
        }
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
    color: #000;
    margin-bottom: 16px;
    option{
        color: #000;
    }
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
