import { BiMenu } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { useLogin } from "../../providers/login";
import { HeaderContainer } from "./style";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineLock, AiOutlineLogout, AiFillCamera } from "react-icons/ai";
import { useState } from "react";
import { useUsuarios } from "../../providers/usuarios";
import { useModal } from "../../providers/modal";
import ModalProfileEdit from "../modalProfileEdit";
import ModalChangePassword from "../modalChangePassword";
import React from "react";
import ModalSetProfilePic from "../modalSetProfilePic";

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

  const [openModalPhoto, setOpenModalPhoto] = useState(false);
  const status = userData?.is_superuser
    ? "Admin"
    : userData?.is_staff
    ? "Atendente"
    : userData?.agente_de_saude
    ? "Médico"
    : "";

  return (
    <>
      {openModalProfileEdit && <ModalProfileEdit />}
      {openModalChangePassword && <ModalChangePassword />}
      {openModalPhoto && (
        <ModalSetProfilePic setOpenModalPhoto={setOpenModalPhoto} />
      )}

      <HeaderContainer>
        <BiMenu onClick={() => openClose()} />
        <div className="contact">
          <div className="header-description__box">
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
          <div onClick={() => setContactBoxOpen(!contactBoxOpen)}>
            {userData &&
              (userData?.foto_perfil ? (
                <img
                  className="profile-pic"
                  src={userData?.foto_perfil}
                  alt="foto Perfil"
                />
              ) : (
                <HiUserCircle />
              ))}
          </div>
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
              <li onClick={() => setOpenModalPhoto(true)}>
                <AiFillCamera />
                Adicionar foto
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
