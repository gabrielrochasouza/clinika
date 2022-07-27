import { createContext, useState, useContext } from "react";
import api from "../../services";


const UsuariosContext = createContext({})


export const UsuariosProvider = ({children})=>{
    const [totalOfPatients, setTotalOfPatients] = useState(0)
    const [totalOfDoctors, setTotalOfDoctors] = useState(0)
    const [totalOfConsultasToday, setTotalOfConsultasToday] = useState(0)
    const [totalOfPatientsThatHaventPayed, setTotalOfPatientsThatHaventPayed] = useState(0)
    
    const getOverviewInfo = async ()=>{
        await api.get('usuarios/resumo/').then(res=>{
            setTotalOfPatients(res.data.total_de_pacientes)
            setTotalOfDoctors(res.data.total_de_medicos)
            setTotalOfConsultasToday(res.data.total_agendado_hoje)
            setTotalOfPatientsThatHaventPayed(res.data.pacientes_inadimplentes)
            
        }).catch(err=>console.log(err))
    }

    return(
        <UsuariosContext.Provider value={{
            totalOfDoctors,
            totalOfPatients,
            totalOfConsultasToday,
            totalOfPatientsThatHaventPayed,
            getOverviewInfo
        }}>
        {children}
        </UsuariosContext.Provider>
    )
}

export const useUsuarios = ()=>useContext(UsuariosContext)