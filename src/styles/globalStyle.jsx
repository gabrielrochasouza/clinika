import { createGlobalStyle } from'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--bg-p);
        font-family: var(--tx-f-p);
    }
    button{
        cursor: pointer;
        border: 0;
        background-color: var(--bg-t);
        color: var(--tx-w);
        border-radius: 10px;
        transition: 500ms all;
        :hover{
            transition: 500ms all;
            background-color: var(--bg-t-hover);
        }
    }
    h1 , h2,h3,h4,h5,h6,li,span{
        color: var(--tx-p);
    }
    svg{
        cursor: pointer;
    }
    li,ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    :root{
        --bg-p:${(props)=>props.theme.bgP};
        --bg-s: ${(props)=>props.theme.bgS};
        --bg-t: ${(props)=>props.theme.bgT};
        --bg-t-hover: ${(props)=>props.theme.bgTHover};
        --tx-p: ${(props)=>props.theme.txP};
        --tx-s: ${(props)=>props.theme.txS};
        --tx-w: ${(props)=>props.theme.txW};
        --tx-t: ${(props)=>props.theme.txT};
        --border: ${(props)=>props.theme.border};
        --tx-f-p:'Open Sans', sans-serif;
        --tx-f-s:'Montserrat', sans-serif;

    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--bg-p);
    }
    ::-webkit-scrollbar{
        width: 3px;
        height: 3px;
        background-color: var(--bg-s);
    }

    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateY(50px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    @keyframes fadeRight {
        from{
            opacity: 0;
            transform: translateX(50px);
        }
        to{
            opacity: 1;
            transform: translateX(0px);
        }
    }
`


export default GlobalStyle