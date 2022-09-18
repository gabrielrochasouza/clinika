import { useEffect } from "react";
import { useDashboard } from "../../providers/dashboard";
import { useUsuarios } from "../../providers/usuarios";
import { InfoBoxesContainer } from "./style";

const InfoBoxes = () => {
  const {
    totalOfDoctors,
    totalOfPatients,
    totalOfConsultasToday,
    totalOfPatientsThatHaventPayed,
    getOverviewInfo,
  } = useUsuarios();
  const { currentSelection } = useDashboard();
  useEffect(() => {
    getOverviewInfo();
    currentSelection;
  }, []);

  return (
    <InfoBoxesContainer>
      <div className="info-box">
        <div className="content">
          <span className="number">{totalOfPatients}</span>
          <span className="number-description">Total de Pacientes Ativos</span>
        </div>
        <div className="icon"></div>
      </div>

      <div className="info-box">
        <div className="content">
          <span className="number">{totalOfPatientsThatHaventPayed}</span>
          <span className="number-description">Pacientes Inadimplentes</span>
        </div>
        <div className="icon"></div>
      </div>

      <div className="info-box">
        <div className="content">
          <span className="number">{totalOfDoctors}</span>
          <span className="number-description">Total de Médicos</span>
        </div>
        <div className="icon"></div>
      </div>

      <div className="info-box">
        <div className="content">
          <span className="number">{totalOfConsultasToday}</span>
          <span className="number-description">
            Consultas Agendadas Para Hoje
          </span>
        </div>
        <div className="icon"></div>
      </div>
    </InfoBoxesContainer>
  );
};
export default InfoBoxes;
