import { NotFound } from "./style"
import {TbError404} from 'react-icons/tb'
import { useNavigate } from "react-router-dom"
import Button from "../../components/submitButton"

const NotFoundPage = ()=>{
    const navigate = useNavigate()
    return(
        <NotFound>
            <div>
            <TbError404/>
            <h1>Página não encontrada!</h1>
            <button onClick={()=>navigate("/")}>
                Voltar
            </button>
            </div>
        </NotFound>
    )
}

export default NotFoundPage
