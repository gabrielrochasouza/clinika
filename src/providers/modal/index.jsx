import { createContext, useState, useContext } from "react";


const ModalContext = createContext({})


export const ModalProvider = ({children})=>{
    const [openModalConvenio, setOpenModalConvenio] = useState(false)
    const openCloseModalConvenio = ()=>setOpenModalConvenio(!openModalConvenio)
    
    const [openModalCreatePaciente, setOpenModalCreatePaciente] = useState(false)
    const openCloseModalCreatePaciente = ()=>setOpenModalCreatePaciente(!openModalCreatePaciente)

    const [openModalCreateMedico, setOpenModalCreateMedico] = useState(false)
    const openCloseModalCreateMedico = ()=>setOpenModalCreateMedico(!openModalCreateMedico)

    const [openModalConsultaDetails, setOpenModalConsultaDetails] = useState(false)
    const openCloseModalConsultaDetails = ()=>setOpenModalConsultaDetails(!openModalConsultaDetails)


    return(
        <ModalContext.Provider value={{
            openModalConvenio,
            openCloseModalConvenio,
            openModalCreatePaciente,
            openCloseModalCreatePaciente,
            openModalCreateMedico,
            openCloseModalCreateMedico,
            openModalConsultaDetails,
            openCloseModalConsultaDetails
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = ()=>useContext(ModalContext)

