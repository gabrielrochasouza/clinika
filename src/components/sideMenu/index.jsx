import { SideMenuContainer } from "./style"
import {AiFillMedicineBox} from 'react-icons/ai'
import {BsFillPeopleFill,BsCalendarDateFill} from 'react-icons/bs'
import {FaCog} from 'react-icons/fa'
import {FaNotesMedical, FaHandshake} from 'react-icons/fa'
import {BiLogOut, BiArrowToLeft} from 'react-icons/bi'
import { useState } from "react"
import {RiCalendarCheckLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import { useLogin } from "../../providers/login"
import { useModal } from "../../providers/modal"
import { useDashboard } from "../../providers/dashboard"


const SideMenu = ()=>{
    const {logout, open, openClose} = useLogin()
    const {openModalConvenio, openCloseModalConvenio} = useModal()
    const {changeCurrentSelection} = useDashboard()

    return(
        <SideMenuContainer open={open}>
            <ul>
                <div className="top">
                <li className="menu-title" onClick={()=>changeCurrentSelection("overview")}>
                    <AiFillMedicineBox/>
                    <span>Clínica Dashboard</span>
                </li>
                <li onClick={()=>changeCurrentSelection("overview")}>
                    <BsBook/>
                    <span>Resumo</span>
                    {!open && <div className="box-message">Resumo</div>}
                    
                </li>
                <li onClick={()=>changeCurrentSelection("pacientes")}>
                    <BsFillPeopleFill/>
                    <span>Pacientes</span>
                    {!open && <div className="box-message">Pacientes</div>}
                    
                </li>
                <li onClick={()=>changeCurrentSelection("agenda")}>
                    <BsCalendarDateFill/>
                    <span>Agenda</span>
                    {!open && <div className="box-message">Agenda</div>}
                    
                </li>
                <li onClick={()=>changeCurrentSelection("medicos")}>
                    <FaNotesMedical/>
                    <span>Médicos</span>
                    {!open && <div className="box-message">Médicos</div>}
                    
                </li>
                <li onClick={()=>changeCurrentSelection("consultas")}>
                    <RiCalendarCheckLine/>
                    <span>Consultas</span>
                    {!open && <div className="box-message">Consulta</div>}
                    
                </li>
                <li>
                    <FaCog/>
                    <span>Configurações</span>
                    {!open && <div className="box-message">Configurações</div>}
                    
                </li>
                <li onClick={openCloseModalConvenio}>
                    <FaHandshake/>
                    <span>Convênio</span>
                    {!open && <div className="box-message">Convênio</div>}
                    
                </li>
                <li onClick={()=>logout()}>
                    <BiLogOut/>
                    <span>Logout</span>
                    {!open && <div className="box-message">Logout</div>}
                    
                </li>

                </div>
                <div className="bottom">
                    <li className="close" onClick={()=>openClose()}>
                        <BiArrowToLeft/>
                    </li>
                </div>
            </ul>
        </SideMenuContainer>
    )
}
export default SideMenu
