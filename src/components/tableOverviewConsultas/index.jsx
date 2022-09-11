import Table from "../table";
import { useEffect } from "react";
import { useConsulta } from "../../providers/consultas";
import Loader from "../loader";
import { getTodayDate } from "../../utils";
import ModalConsulta from "../modalConsultaDetails";
import { useModal } from "../../providers/modal";
import { useState } from "react";
import { timePassed } from "../../utils";
import Empty from "../empty";

const TableConsultasOverview = ({today}) => {
    const {consultas, getConsultas} = useConsulta()
    const { openModalConsultaDetails, openCloseModalConsultaDetails } = useModal();
    const [consultaId, setConsultaId] = useState('')
    useEffect(()=>{
        getConsultas(getTodayDate().nowDate)
    },[])
  return (
    <>
    
      <Table
        headerTitle={"Consultas Hoje"}
        headerBtn={
            <>
                <button>Filtro</button>
            </>
    }
        next={consultas?.next}
        previous={consultas?.previous}
        count={consultas?.count}
        tableHeader={
          <>
            <span >Paciente</span>
            <span >Médico</span>
            <span>Horário</span>
          </>
        }
        body={
          <>
            {consultas.results ? consultas.results.length===0 ? <Empty/> : consultas.results.map(consulta=>(
              <li key={consulta.id} onClick={async()=>{
                setConsultaId(consulta.id)
                openCloseModalConsultaDetails()
              }}>
                <span>{consulta.paciente.nome}</span>
                <span >{consulta.medico.nome}</span>
                <span  >
                    <strong className={timePassed(consulta.agenda.horario_final) ? "passed" : "will-pass"}>
                    {consulta.agenda.horario_inicial}-{consulta.agenda.horario_final}
                    </strong>
                </span>

            </li>
            )) : <Loader/> }

          </>
        }
        />
        {openModalConsultaDetails && <ModalConsulta consultaId={consultaId}/>}
    </>
  );
};

export default TableConsultasOverview;