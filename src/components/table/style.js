import styled from "styled-components";

export const TableContainer = styled.div`
    display: flex;
    height: 95%;
    gap: 16px;
    margin: 0 16px 16px;
    background-color: var(--bg-s);
    border-radius: 16px;
    padding: 20px 20px 40px;
    flex-direction: column;
    animation: fadeUp 500ms;

    >svg{
        width: 10px;
    }
    .visibility-off{
        visibility: hidden;
    }

    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateY(100px);
        }   
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    .table-footer{
        .pagination{
            display: flex;
            gap:20px;
            .current-page{
                color: var(--tx-w);
                transform: scale(1.5);
                transition: 1s all;
                background-color: var(--tx-t);
            }
            >li{
                cursor: pointer;
                border: 1px solid var(--tx-t);
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                color: var(--tx-p);
                font-size: 0.8rem;
                transition: 1s all;
                
                :hover{
                    color: var(--tx-w);
                    transform: scale(1.5);
                    transition: 1s all;
                    background-color: var(--tx-t);
                }
            }
        }
    }
    .table-header, .table-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            padding: 7px 10px;
            font-size: .7rem;
        }
        .search{
            border-radius: 50%;
            padding: 7px;

            svg{
            }
        }
        .table-header__title{}
        .table-header__btn{
            display: flex;
            align-items: center;
            gap: 6px;
            svg{
                margin: 3px 1px 0;

            }
        }
    }

    .table-body{
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        li{
            padding: 8px 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            span{
                flex: 1;
                font-size: 0.75rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                padding: 0 6px 0 0;
                @media (max-width:700px) {
                    min-width: 150px;
                }
            }
            span >svg{
                color: var(--tx-t);
                border-radius: 50%;
                width: 15px;
                height: 15px;
                padding: 1px;

            }
        }
        li:hover:not(.table-body-header) {
            transition: 1s all;
            background-color: var(--bg-p);
        }
        .table-body-header{
            border-bottom: 1px solid var(--bg-p);
            padding: 10px 12px;
        }
    }

`
