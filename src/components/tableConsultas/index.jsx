import Table from "../table";
import { useEffect, useState } from "react";
import { useConsulta } from "../../providers/consultas";
import Loader from "../loader";
import { useModal } from "../../providers/modal";
import ModalConsulta from "../modalConsultaDetails";


const TableConsultas = ({today}) => {
    const {consultas, getConsultas} = useConsulta()
    const { openModalConsultaDetails, openCloseModalConsultaDetails } = useModal();
    const [consultaInfo, setConsultaInfo] = useState({})
    useEffect(()=>{
        getConsultas(today)
    },[])
  return (
    <>
      <Table
        headerTitle={"Consultas"}
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
            <span>Horário e Dia</span>
            <span >Confirmado</span>
            <span >Compareceu</span>
            <span >Pago</span>
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
                <span >{consulta.agenda.horario_inicial}-{consulta.agenda.horario_final} - {consulta.agenda.dia_da_consulta}</span>
                <span>{consulta.confirmado ? "Sim" : "Não"}</span>
                <span>{consulta.compareceu ? "Sim" : "Não"}</span>
                <span>{consulta.pago ? "Sim" : "Não"}</span>
            </li>
            )) : <Loader/> }

          </>
        }
      />
      {openModalConsultaDetails && <ModalConsulta consultaInfo={consultaInfo}/>}
    </>
  );
};

export default TableConsultas;