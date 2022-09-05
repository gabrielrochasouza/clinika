import { BiMenu } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { useLogin } from "../../providers/login";
import { HeaderContainer } from "./style";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLock, AiOutlineLogout } from "react-icons/ai";
import { useState } from "react";
import { useUsuarios } from "../../providers/usuarios";
import { useModal } from "../../providers/modal";
import ModalProfileEdit from "../modalProfileEdit";
import ModalChangePassword from "../modalChangePassword";

const Header = () => {
  const { openClose, logout } = useLogin();
  const [contactBoxOpen, setContactBoxOpen] = useState(false);
  const { userData } = useUsuarios();
  const {
    openModalProfileEdit,
    openCloseModalProfileEdit,
    openModalChangePassword,
    openCloseModalChangePassword,
  } = useModal();
  const status = userData.is_superuser
    ? "Admin"
    : userData.is_staff
    ? "Atendente"
    : "Médico";
  return (
    <>
      {openModalProfileEdit && <ModalProfileEdit />}
      {openModalChangePassword && <ModalChangePassword />}
      <HeaderContainer>
        <BiMenu onClick={() => openClose()} />
        <div className="contact">
          <div
            className="header-description__box"
          >
            <span className="header-description">
              Seja Bem Vindo {userData.nome}!
            </span>
            <p>
              <span className="header-description">Status: </span>
              <span className="header-description header-description__colored">
                {status}
              </span>
            </p>
          </div>

          <HiUserCircle onClick={() => setContactBoxOpen(!contactBoxOpen)} />
          {contactBoxOpen && (
            <ul className="box-contact">
              <li onClick={openCloseModalProfileEdit}>
                <FaUserAlt />
                Editar perfil
              </li>
              <li onClick={openCloseModalChangePassword}>
                <AiOutlineLock />
                Alterar senha
              </li>
              <li onClick={logout}>
                <AiOutlineLogout />
                Sair
              </li>
            </ul>
          )}
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
