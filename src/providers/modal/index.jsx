import { createContext, useState, useContext } from "react";


const ModalContext = createContext({})


export const ModalProvider = ({children})=>{
    const [openModalConvenio, setOpenModalConvenio] = useState(false)
    const openCloseModalConvenio = ()=>setOpenModalConvenio(!openModalConvenio)
    
    const [openModalCreatePaciente, setOpenModalCreatePaciente] = useState(false)
    const openCloseModalCreatePaciente = ()=>setOpenModalCreatePaciente(!openModalCreatePaciente)

    return(
        <ModalContext.Provider value={{
            openModalConvenio,
            openCloseModalConvenio,
            openModalCreatePaciente,
            openCloseModalCreatePaciente
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = ()=>useContext(ModalContext)

