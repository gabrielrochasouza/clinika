import LoginContainer from "./style"
import {FaLock} from 'react-icons/fa'
import Input from "../../components/input"
import Button from "../../components/submitButton"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useLogin } from "../../providers/login"
import { Navigate } from "react-router-dom"


const LoginPage = ()=>{
    const {login} = useLogin()
    const {register, handleSubmit} = useForm()
    const [disabled, setDisabled] = useState(false);
    const loginSubmission = async (data)=>{
        setDisabled(true)
        const response = await login(data)
        setDisabled(false)
    }

    if(localStorage.getItem('@clinicaToken')){
        return <Navigate to={'/dashboard'}/>
    }
    return(
        <LoginContainer>
            <form className="box" onSubmit={handleSubmit(loginSubmission)}>
                <div className="icon-lock">
                <FaLock/>
                </div>
                <h1>Entrar</h1>
                <span>Olá, Seja bem vindo, faça seu login.</span>
                <Input register={register} inputName="email" name={'email'} type={'email'}/>
                <Input register={register} inputName="password" name={'password'} isPassword/>
                <Button disabled={disabled} type={'submit'} text={'Entrar'}/>
                <span className="forget-password">
                    Esqueceu a senha?
                </span>
            </form>
        </LoginContainer>
    )

}

export default LoginPage