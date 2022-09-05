import { BiMenu } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { useLogin } from "../../providers/login";
import { HeaderContainer } from "./style";
import {FaUserAlt} from 'react-icons/fa'
import {AiOutlineLock, AiOutlineLogout} from 'react-icons/ai'
import { useState } from "react";

const Header = () => {
  const { openClose, logout } = useLogin();
  const [contactBoxOpen, setContactBoxOpen] = useState(false)
  return (
    <HeaderContainer>
      <BiMenu onClick={() => openClose()} />
      <div className="contact">
        <span>Seja Bem Vindo!</span>
        <HiUserCircle onClick={()=>setContactBoxOpen(!contactBoxOpen)} />
        {contactBoxOpen && (
        <ul className="box-contact">
            <li>
                <FaUserAlt/>
                Editar perfil
            </li>
            <li>
                <AiOutlineLock/>
                Alterar senha
            </li>
            <li onClick={logout}>
                <AiOutlineLogout/>
                Sair
            </li>
        </ul>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
