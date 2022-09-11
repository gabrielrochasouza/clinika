import styled from "styled-components";

export const Div = styled.div`
    width: 98%;
    height: 100%;
    max-height: 430px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 0px;
    

    @media (min-width: 1680px) {
        max-height: 400px;
    }

    .div_button_and_legenda {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .div_legenda {
            display: flex;
            align-items: center;

            .div_legenda_1,
            .div_legenda_2,
            .div_legenda_3,
            .div_legenda_4 {
                margin-right: 16px;

                svg {
                    margin-right: 10px;
                    border: 0.5px solid black;
                    border-radius: 50%;
                    color: transparent;
                    cursor: default;
                }

                @media (max-width: 425px) {
                    display: none;
                }
            }

            .div_legenda_1 svg {
                background: #ffffff;
            }

            .div_legenda_2 svg {
                background: #009900;
            }

            .div_legenda_3 svg {
                background: #cccc00;
            }

            .div_legenda_4 svg {
                background: red;
            }
        }
    }

    button {
        margin-bottom: 10px;
    }
`;

export const DivContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border: 8px solid var(--border);
    border-radius: 8px;
    margin-bottom: 1%;
`;

export const DivContent = styled.div`
    display: flex;
    width: 100%;
`;

export const DivBody = styled.div`
    width: 100%;
    position: relative;
`;
