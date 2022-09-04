import { useEffect } from "react";
import { useModal } from "../../providers/modal";
import { useUsuarios } from "../../providers/usuarios";
import Loader from "../loader";
import SearchInput from "../searchInput";
import Table from "../table";

const TablePacientes = () => {
  const { pacientes, getPacientes } = useUsuarios();
  const {openCloseModalCreatePaciente} = useModal();
  useEffect(() => {
    getPacientes();
  }, []);
  return (
    <>
      <Table
        headerTitle={"Pacientes"}
        getFunction={getPacientes}
        headerBtn={
        <>
        
        <SearchInput placeholder="Pesquisar paciente"/>
        <button>Filtro</button>
        <button onClick={()=>{
            openCloseModalCreatePaciente()
        }}>
            Cadastrar Paciente
        </button>
        </>
        }
        next={pacientes?.next}
        previous={pacientes?.previous}
        count = {pacientes?.count}
        tableHeader={
          <>
            <span className="nome">Nome</span>
            <span className="email">Email</span>
            <span className="tel">Telefone</span>
            <span className="cpf">CPF</span>
            <span className="status">status</span>
            <span className="consultas">
              Consultas pagas/Total de consultas
            </span>
          </>
        }
        body={
          <>
            {pacientes?.results &&
              pacientes.results.map((paciente) => (
                <li key={paciente.id}>
                  <span>{paciente.nome}</span>
                  <span>{paciente.email}</span>
                  <span>{paciente.telefone}</span>
                  <span>{paciente.cpf}</span>
                  <span>{paciente.status}</span>
                  <span>
                    {paciente.consultas_pagas}/{paciente.total_de_consultas}
                  </span>
                </li>
              )) }
          </>
        }
      />
    </>
  );
};

export default TablePacientes;
