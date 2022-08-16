import Table from "../table";
import { useEffect } from "react";
import { useConsulta } from "../../providers/consultas";


const TableConsultas = ({today}) => {
    const {consultas, getConsultas} = useConsulta()
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
        <button>Criar Consulta</button>
            </>
    }
        next={consultas?.next}
        previous={consultas?.previous}
        tableHeader={
          <>
            <span >Paciente</span>
            <span >Médico</span>
            <span>Horário</span>
            <span >Confirmado</span>
            <span >Compareceu</span>
            <span >Pago</span>
          </>
        }
        body={
          <>
            {consultas.results && consultas.results.map(consulta=>(
            <li key={consulta.id}>
                <span>{consulta.paciente.nome}</span>
                <span >{consulta.medico.nome}</span>
                <span >{consulta.agenda.horario_inicial}-{consulta.agenda.horario_final} - {consulta.agenda.dia_da_consulta}</span>
                <span>{consulta.confirmado ? "Sim" : "Não"}</span>
                <span>{consulta.compareceu ? "Sim" : "Não"}</span>
                <span>{consulta.pago ? "Sim" : "Não"}</span>
            </li>
            ))}

          </>
        }
      />
    </>
  );
};

export default TableConsultas;