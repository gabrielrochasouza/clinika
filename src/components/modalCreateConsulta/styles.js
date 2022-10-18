import styled from "styled-components";

export const StyledDiv = styled.div`
    .paciente-list {
        position: relative;

        :focus-within ul,
        ul:hover {
            visibility: visible;
        }
        ul {
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
            li {
                cursor: pointer;
                padding: 4px 12px;
                :hover {
                    background-color: var(--bg-s);
                }
            }
        }
    }
`;

export const DivHorarios = styled.div`
    display: flex;
    gap: 10px;
`;
