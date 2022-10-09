import React from "react";
import { useConsulta } from "../../../../providers/consultas";
import { useMedico } from "../../../../providers/medicos";
import InfoPacientesConsulta from "../infoPacientesConsulta";
import { InfoBoxesContainer } from "./style";

export const InfoBoxMedico = () => {
  const { medico } = useMedico();
  const { consultaMedico } = useConsulta();

  return (
    <InfoBoxesContainer>
      <div className="info-box">
        <div className="content">
          <span className="number">{medico.consultas_a_fazer_hoje}</span>
          <span className="number-description">Consultas a fazer hoje</span>
        </div>
        <div className="icon"></div>
        {consultaMedico && (
          <div>
            <InfoPacientesConsulta />
          </div>
        )}
      </div>

      <div className="info-box">
        <div className="content">
          <span className="number">{consultaMedico.length}</span>
          <span className="number-description">Total de consultas a fazer</span>
        </div>
        <div className="icon"></div>
        {consultaMedico && (
          <div>
            <InfoPacientesConsulta />
          </div>
        )}
      </div>
    </InfoBoxesContainer>
  );
};

export default InfoBoxMedico;
