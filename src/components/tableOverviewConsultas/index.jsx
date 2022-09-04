import Table from "../table";
import { useEffect } from "react";
import { useConsulta } from "../../providers/consultas";
import Loader from "../loader";
import { getTodayDate } from "../../utils";
import ModalConsulta from "../modalConsultaDetails";
import { useModal } from "../../providers/modal";
import { useState } from "react";
import { timePassed } from "../../utils";

const TableConsultasOverview = ({today}) => {
    const {consultas, getConsultas} = useConsulta()
    const { openModalConsultaDetails, openCloseModalConsultaDetails } = useModal();
    const [consultaInfo, setConsultaInfo] = useState({})
    useEffect(()=>{
        getConsultas(getTodayDate().nowDate)
    },[])
  return (
    <>
    
      <Table
      style={{minWidth:'350px'}}
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
            {consultas.results ? consultas.results.map(consulta=>(
            <li key={consulta.id} onClick={()=>{
                openCloseModalConsultaDetails()
                setConsultaInfo(consulta)
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
      {openModalConsultaDetails && <ModalConsulta consultaInfo={consultaInfo}/>}
    </>
  );
};

export default TableConsultasOverview;