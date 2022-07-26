import styled from "styled-components";

export const DivContainer = styled.div`
    background-color: var(--bg-s);
    margin: 0 16px 16px;
    border-radius: 16px;
    height: 95%;
    h4{
        padding: 0 16px;
    }
    `;

export const DivContent = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    width: 100%;

    .div_medicos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 90%;
        /* max-width: 310px; */
        flex: 1;
        small{
            color: var(--tx-p);
        }
        ul{
            margin: -20px 0 0;
            visibility: hidden;
        }
        >div:focus-within ~ ul, ul:hover {
            visibility: visible;
        }


        .div_medicos_input {
            display: flex;
            align-items: center;
            flex-direction: row;
            width: 100%;
            border: 2px solid var(--border);
            border-radius: 4px;
            background-color: var(--bg-p);
            text-align: center;
            :hover {
                border-color: var(--bg-t-hover);
            }

            :focus-within {
                border-color: var(--bg-t);
            }

            input {
                border: none;
                color: var(--tx-p);
                padding: 4px 8px;
                width: 91%;
                height: 30px;
                background-color: transparent;

                :focus-visible {
                    outline: none;
                }
            }

            div {
                width: 8%;
                height: 30px;
                color: #d10000;

                svg {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
    }

    .react-calendar {
        width: 350px;
        max-width: 100%;
        background: var(--bg-s);
        border: 2px solid var(--border);
        border-radius: 8px;
        
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.125em;
    }
    .react-calendar--doubleView {
        width: 700px;
    }
    .react-calendar--doubleView .react-calendar__viewContainer {
        display: flex;
        margin: -0.5em;
    }
    .react-calendar--doubleView .react-calendar__viewContainer > * {
        width: 50%;
        margin: 0.5em;
    }
    .react-calendar,
    .react-calendar *,
    .react-calendar *:before,
    .react-calendar *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .react-calendar button {
        margin: 0;
        border: 0;
        outline: none;
        border-radius: 8px;
    }
    .react-calendar button:enabled:hover {
        cursor: pointer;
    }
    .react-calendar__navigation {
        display: flex;
        height: 44px;
        margin: 4px;
    }
    .react-calendar__navigation button {
        min-width: 44px;
        background: none;
    }
    .react-calendar__navigation button:disabled {
        background: var(--border);
        cursor: default;
    }
    .react-calendar__navigation__arrow,
    .react-calendar__navigation__label {
        color: var(--tx-p);

        :hover {
            background: var(--bg-t-hover);
            color: var(--tx-p-i);

            span {
                color: var(--tx-p-i);
            }
        }
    }

    .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.75em;
        color: var(--tx-t);
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);

        abbr[title] {
            text-decoration: none;
        }
    }
    .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
    }
    .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75em;
        font-weight: bold;
    }
    .react-calendar__year-view .react-calendar__tile,
    .react-calendar__decade-view .react-calendar__tile,
    .react-calendar__century-view .react-calendar__tile {
        padding: 1.5em 0.5em;
    }
    .react-calendar__tile {
        max-width: 100%;
        padding: 10px 6.6667px;
        background: none;
        text-align: center;
        line-height: 16px;
        color: var(--tx-p);
    }
    .react-calendar__month-view__days__day--weekend {
        color: #d10000;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575;
    }
    .react-calendar__tile:disabled {
        background-color: #f0f0f0;
        cursor: default;
    }
    .react-calendar__tile--now {
        background: var(--tx-s);
        color: var(--bg-s);
    }
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background: var(--tx-s);
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        background: var(--bg-t-hover);
        color: var(--tx-p-i);
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        background: var(--bg-t-hover);
    }
    .react-calendar__tile--hasActive {
        background: var(--bg-t);
    }
    .react-calendar__tile--active {
        background: var(--bg-t);
        color: var(--tx-p-i);
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: var(--bg-t);
        color: var(--tx-p-i);
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
    }
`;
