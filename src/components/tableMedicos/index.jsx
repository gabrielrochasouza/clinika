import Table from "../table";
import { useMedico } from "../../providers/medicos";
import { useDashboard } from "../../providers/dashboard";
import { useEffect } from "react";
import SearchInput from "../searchInput";
import { useModal } from "../../providers/modal";
import Loader from "../loader";
import Empty from "../empty";
import { useConsulta } from "../../providers/consultas";

const TableMedicos = () => {
  const { medicos, getMedicos, viewMedico } = useMedico();
  const { openCloseModalCreateMedico } = useModal();
  const { changeCurrentSelection } = useDashboard();
  const { getConsultaByMedico } = useConsulta();

  useEffect(() => {
    getMedicos();
  }, []);

  const viewMedicoProfile = (data) => {
    changeCurrentSelection("viewMedico");
    viewMedico(data);
  };

  return (
    <>
      <Table
        headerTitle={"Médicos"}
        headerBtn={
          <>
            <SearchInput
              placeholder="Pesquisar médico"
              submitFunction={async (text) => {
                await getMedicos(`?nome=${text}`);
              }}
            />
            <button onClick={openCloseModalCreateMedico}>
              Cadastrar Médico
            </button>
          </>
        }
        next={medicos?.next}
        previous={medicos?.previous}
        getFunction={getMedicos}
        count={medicos?.count}
        tableHeader={
          <>
            <span className="nome">Nome</span>
            <span className="email">Email</span>
            <span className="tel">Especialidade</span>
            <span className="cpf">Telefone</span>
            <span className="consultas">Registro Profissional</span>
            <span className="consultas">Consultas a fazer hoje</span>
          </>
        }
        body={
          <>
            {medicos?.results ? (
              medicos.results.length === 0 ? (
                <Empty />
              ) : (
                medicos.results.map((medico) => (
                  <li
                    key={medico.id}
                    onClick={() => {
                      viewMedicoProfile(medico);
                      getConsultaByMedico(medico.id);
                    }}
                  >
                    <span className="nome">{medico.nome}</span>
                    <span className="email">{medico.email}</span>
                    <span className="tel">{medico.especialidade}</span>
                    <span className="cpf">{medico.telefone}</span>
                    <span className="consultas">
                      {medico.registro_profissional}
                    </span>
                    <span className="consultas">
                      {medico.consultas_a_fazer_hoje}
                    </span>
                  </li>
                ))
              )
            ) : (
              <Loader />
            )}
          </>
        }
      />
    </>
  );
};

export default TableMedicos;
