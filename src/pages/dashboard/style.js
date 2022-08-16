import styled from "styled-components";

export const DashboardContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    background-color: var(--bg-t);
    main{
        overflow: hidden;
        background-color: var(--bg-p);
        display: flex;
        flex-direction: column;
        flex: 1;
        border-radius: 20px 0 0 20px;
        @media (max-width: 870px) {
            border-radius: 0px 0 0 0px;
            flex-basis: 100%;
        }

    }


`
