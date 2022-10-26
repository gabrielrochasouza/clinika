import Table from "../table";
import { useEffect, useState } from "react";
import { useConsulta } from "../../providers/consultas";
import Loader from "../loader";
import { useModal } from "../../providers/modal";
import ModalConsulta from "../modalConsultaDetails";
import Empty from "../empty";
import ModalConsultaFilter from "../modalConsultaFilter";

const TableConsultas = ({ today }) => {
  const { consultas, getConsultas } = useConsulta();
  const {
    openModalConsultaDetails,
    openCloseModalConsultaDetails,
    openModalConsultaFilter,
    openCloseModalConsultaFilter
  } = useModal();
  const [consultaId, setConsultaId] = useState("");
  useEffect(() => {
    getConsultas(today.toLocaleDateString().split("/").join("-"));
  }, []);
  return (
    <>
      <Table
        headerTitle={"Consultas"}
        headerBtn={
          <>
            <button onClick={()=>openCloseModalConsultaFilter()}>Filtro</button>
          </>
        }
        next={consultas?.next}
        previous={consultas?.previous}
        count={consultas?.count}
        getFunction={getConsultas}
        tableHeader={
          <>
            <span>Paciente</span>
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
            {consultas.results ? (
              consultas.results.length === 0 ? (
                <Empty />
              ) : (
                consultas.results.map((consulta) => (
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
      {openModalConsultaDetails && (
        <ModalConsulta consultaId={consultaId} />
      )}
      {openModalConsultaFilter && (
        <ModalConsultaFilter/>
      )}
    </>
  );
};

export default TableConsultas;
