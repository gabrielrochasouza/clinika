import { SideMenuContainer } from "./style"
import {AiFillMedicineBox} from 'react-icons/ai'
import {BsFillPeopleFill,BsCalendarDateFill} from 'react-icons/bs'
import {FaCog} from 'react-icons/fa'
import {FaNotesMedical} from 'react-icons/fa'
import {BiLogOut, BiArrowToLeft} from 'react-icons/bi'
import { useState } from "react"
import {RiCalendarCheckLine} from 'react-icons/ri'
import { useLogin } from "../../providers/login"


const SideMenu = ()=>{
    const {logout, open, openClose} = useLogin()
    return(
        <SideMenuContainer open={open}>
            <ul>
                <div className="top">
                <li className="menu-title">
                    <AiFillMedicineBox/>
                    <span>Clínica Dashboard</span>
                </li>
                <li>
                    <BsFillPeopleFill/>
                    <span>Pacientes</span>
                    {!open && <div className="box-message">Pacientes</div>}
                    
                </li>
                <li>
                    <BsCalendarDateFill/>
                    <span>Agenda</span>
                    {!open && <div className="box-message">Agenda</div>}
                    
                </li>
                <li>
                    <FaNotesMedical/>
                    <span>Médicos</span>
                    {!open && <div className="box-message">Médicos</div>}
                    
                </li>
                <li>
                    <RiCalendarCheckLine/>
                    <span>Consultas</span>
                    {!open && <div className="box-message">Consulta</div>}
                    
                </li>
                <li>
                    <FaCog/>
                    <span>Configurações</span>
                    {!open && <div className="box-message">Configurações</div>}
                    
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
