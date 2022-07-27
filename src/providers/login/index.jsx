import {createContext, useContext, useState} from 'react'
import toast from 'react-hot-toast'
import api from '../../services'
import { useNavigate } from 'react-router-dom'


const LoginContext = createContext({})

export const LoginProvider = ({children})=>{
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const openClose = ()=>setOpen(!open)

    const login = async (data)=>{
        await api.post('/login/',data).then(res=>{
            const accessToken = res.data.access
            localStorage.setItem('@clinicaToken', accessToken)
            localStorage.setItem('@ultimoLogin', new Date().valueOf() )
            toast.success('Login feito com sucesso')
        }).catch((err=>toast.error('Credenciais inválidas')))
    }
    const logout = ()=>{
        localStorage.clear()
        toast.success('Você foi Deslogado')
        navigate('/')
    }

    return(
        <LoginContext.Provider value={{
            login,
            logout,
            open,
            openClose
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = ()=>useContext(LoginContext)


