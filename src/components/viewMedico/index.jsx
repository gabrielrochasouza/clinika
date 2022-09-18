import { useMedico } from "../../providers/medicos";
import { useModal } from "../../providers/modal";
import Loader from "../loader";
import { AsideContainer, MainContainer } from "./styles";
import DefaultProfileImage from "../../assets/img/default-profile-img.png";
import Profile from "../profileMedico";
import InfoBoxes from "../infoBoxes";
import InfoBoxMedico from "./components/infoBoxMedico";
import { useConsulta } from "../../providers/consultas";
import { useEffect } from "react";

const ViewMedico = () => {
  const { medico } = useMedico();
  // const { openCloseModalCreateMedico } = useModal();

  return (
    <>
      <Profile
        key={medico.id}
        body={
          <>
            <AsideContainer className="aside-profile">
              <div className="container-img">
                <div
                  className="config-img"
                  style={
                    medico.profileImg
                      ? { backgroundImage: `url(${medico.profileImg})` }
                      : { backgroundImage: `url(${DefaultProfileImage})` }
                  }
                />
                <span className="container-info-nome">{medico.nome}</span>
                <span className="container-info-especialidade">
                  {medico.especialidade}
                </span>
                <span className="container-info-registro">
                  Registro: {medico.registro_profissional}
                </span>
              </div>
              <div className="container-contato">
                <h3>Contato</h3>
                <div className="container-contato-telefone">
                  <span>Telefone: </span>
                  <span>{medico.telefone}</span>
                </div>
                <span className="container-email-telefone">
                  <span>E-mail: </span>
                  <span>{medico.email}</span>
                </span>
              </div>
            </AsideContainer>
            <MainContainer className="main-medico-consultas">
              <InfoBoxMedico />
            </MainContainer>
          </>
        }
      />
    </>
  );
};

export default ViewMedico;
