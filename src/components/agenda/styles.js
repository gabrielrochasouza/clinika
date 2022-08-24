import styled from "styled-components";

export const SectionContainer = styled.section`
    margin: 0 16px;
`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    input {
        width: 90%;
        max-width: 340px;
    }
`;
