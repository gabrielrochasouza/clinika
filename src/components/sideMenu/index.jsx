import { SideMenuContainer } from "./style";
import { AiFillMedicineBox } from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsCalendarDateFill,
  BsChatLeftDotsFill,
} from "react-icons/bs";
import { FaNotesMedical, FaHandshake } from "react-icons/fa";
import { BiLogOut, BiArrowToLeft } from "react-icons/bi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
import { useLogin } from "../../providers/login";
import { useDashboard } from "../../providers/dashboard";
import { useUsuarios } from "../../providers/usuarios";

const SideMenu = () => {
  const { logout, open, openClose } = useLogin();
  const { changeCurrentSelection } = useDashboard();
  const { userData} = useUsuarios();

  const status = userData.is_superuser
    ? "Admin"
    : userData.is_staff
    ? "Atendente"
    : "Médico";

  return (
    <SideMenuContainer open={open}>
      <ul>
        <div className="top">
          <li
            className="menu-title"
            onClick={() => changeCurrentSelection("overview")}
          >
            <AiFillMedicineBox />
            <span>Clínica Dashboard</span>
          </li>
          <li onClick={() => changeCurrentSelection("overview")}>
            <BsBook />
            <span>Resumo</span>
            {!open && <div className="box-message">Resumo</div>}
          </li>
          <li onClick={() => changeCurrentSelection("pacientes")}>
            <BsFillPeopleFill />
            <span>Pacientes</span>
            {!open && <div className="box-message">Pacientes</div>}
          </li>
          <li onClick={() => changeCurrentSelection("agenda")}>
            <BsCalendarDateFill />
            <span>Agenda</span>
            {!open && <div className="box-message">Agenda</div>}
          </li>
          <li onClick={() => changeCurrentSelection("medicos")}>
            <FaNotesMedical />
            <span>Médicos</span>
            {!open && <div className="box-message">Médicos</div>}
          </li>
          <li onClick={() => changeCurrentSelection("consultas")}>
            <RiCalendarCheckLine />
            <span>Consultas</span>
            {!open && <div className="box-message">Consulta</div>}
          </li>

          {status === "Admin" && (
            <>
              <li onClick={() => changeCurrentSelection("atendentes")}>
                <BsChatLeftDotsFill />
                <span>Atendentes</span>
                {!open && <div className="box-message">Atendentes</div>}
              </li>

              <li onClick={() => changeCurrentSelection("convenio")}>
                <FaHandshake />
                <span>Convênio</span>
                {!open && <div className="box-message">Convênio</div>}
              </li>
            </>
          )}
          <li onClick={() => logout()}>
            <BiLogOut />
            <span>Logout</span>
            {!open && <div className="box-message">Logout</div>}
          </li>
        </div>
        <div className="bottom">
          <li className="close" onClick={() => openClose()}>
            <BiArrowToLeft />
          </li>
        </div>
      </ul>
    </SideMenuContainer>
  );
};
export default SideMenu;
