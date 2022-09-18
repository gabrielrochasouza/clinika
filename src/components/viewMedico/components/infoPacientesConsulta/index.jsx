import React, { useState } from "react";
import { useConsulta } from "../../../../providers/consultas";
import { useModal } from "../../../../providers/modal";
import Empty from "../../../empty";
import Loader from "../../../loader";
import ModalConsulta from "../../../modalConsultaDetails";
import Table from "../../../table";

const InfoPacientesConsulta = () => {
  const { consultaMedico } = useConsulta();
  const { openModalConsultaDetails, openCloseModalConsultaDetails } =
    useModal();
  const [consultaId, setConsultaId] = useState("");

  return (
    <>
      <Table
        headerTitle={"Pacientes"}
        tableHeader={
          <>
            <span>Nome</span>
            <span>Médico</span>
            <span>Horário e Dia</span>
            <span>Confirmado</span>
            <span>Compareceu</span>
            <span>Pago</span>
            <span>Cancelado</span>
          </>
        }
        body={
          <>
            {consultaMedico ? (
              consultaMedico.length === 0 ? (
                <Empty />
              ) : (
                consultaMedico.map((consulta) => (
                  <li
                    key={consulta.id}
                    onClick={() => {
                      openCloseModalConsultaDetails();
                      setConsultaId(consulta.id);
                    }}
                  >
                    <span>{consulta.paciente.nome}</span>
                    <span>{consulta.medico.nome}</span>
                    <span>
                      {consulta.agenda.horario_inicial}-
                      {consulta.agenda.horario_final} -{" "}
                      {consulta.agenda.dia_da_consulta}
                    </span>
                    <span>{consulta.confirmado ? "Sim" : "Não"}</span>
                    <span>{consulta.compareceu ? "Sim" : "Não"}</span>
                    <span>{consulta.pago ? "Sim" : "Não"}</span>
                    <span>{consulta.consulta_cancelada ? "Sim" : "Não"}</span>
                  </li>
                ))
              )
            ) : (
              <Loader />
            )}
          </>
        }
      />
      {openModalConsultaDetails && <ModalConsulta consultaId={consultaId} />}
    </>
  );
};

export default InfoPacientesConsulta;
