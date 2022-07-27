import styled from "styled-components";


const LoginContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .forget-password{
        cursor: pointer;
    }
    .box{
        padding: 20px;
        width: 100%;
        max-width: 340px;
        text-align: center;
        background-color: var(--bg-s);
        position: relative;
        border-radius: 20px;
        .icon-lock{
            position: absolute;
            top: -20px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--bg-t);
            left: calc(50% - 20px);
            svg{
                color: var(--bg-s);

            }
        }
        span{
            font-size: 0.7rem;
            display: block;
            color: var(--tx-t);
            font-weight: 600;
        }
        h1{
            font-size: 2rem;
        }
    }
`
export default LoginContainer