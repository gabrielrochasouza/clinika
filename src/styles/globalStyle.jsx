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
        --bg-p:#e1e1e1;
        --bg-s: #fff;
        --bg-t: #3f63f2;
        --bg-t-hover:#2747c8;
        --tx-p: #000;
        --tx-s: #222;
        --tx-w: #fff;
        --tx-t: #3f63f2;
        --tx-f-p:'Open Sans', sans-serif;
        --tx-f-s:'Montserrat', sans-serif;
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