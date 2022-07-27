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
        .tables{
            display: flex;
            height: 95%;
            gap: 16px;
            margin: 0 16px 16px;
            @media (max-width: 1200px) {
                display: initial;
                >div{
                    margin: 30px 0;
                }
            }
            h2{
                font-size: 1rem;
            }
            >div{
                min-height: 400px;
                border-radius: 16px;
                padding: 16px;
                background-color: var(--bg-s);
            }
            .box-pacientes{
                flex: 1;
            }
            .box-consultas{
                min-width: 340px;
            }

        }
    }

`
