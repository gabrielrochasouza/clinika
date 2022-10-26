import { Navigate } from "react-router-dom";
import SideMenu from "../../components/sideMenu";
import { compareTimePassedSinceLastLogin } from "../../utils";
import { DashboardContainer } from "./style";
import Header from "../../components/header";
import InfoBoxes from "../../components/infoBoxes";
import TablePacientes from "../../components/tablePacientes";
import TableConsultas from "../../components/tableConsultas";
import TableMedicos from "../../components/tableMedicos";
import { useDashboard } from "../../providers/dashboard";
import TableConsultasOverview from "../../components/tableOverviewConsultas";
import AgendaPage from "../../components/agendaPage";
import TableConvenios from "../../components/tableConvenio";
import TableAtendentes from "../../components/tableAtendente";
import { useAgenda } from "../../providers/agenda";

const Dashboard = () => {
  const { currentSelection } = useDashboard();
  const { date } = useAgenda();

  compareTimePassedSinceLastLogin();
  if (!localStorage.getItem("@clinicaToken")) {
    return <Navigate to={"/"} />;
  }
  return (
    <DashboardContainer>
      <SideMenu />
      <main>
        <Header />
        <InfoBoxes />
        {currentSelection === "overview" ? (
          <div className='overview'>
            <TablePacientes />
            <TableConsultasOverview />
          </div>
        ) : currentSelection === "pacientes" ? (
          <>
            <TablePacientes />
          </>
        ) : currentSelection === "consultas" ? (
          <>
            <TableConsultas today={date} />
          </>
        ) : currentSelection === "agenda" ? (
          <>
            <AgendaPage />
          </>
        ) : currentSelection === "convenio" ? (
          <>
            <TableConvenios />
          </>
        ) : currentSelection === "atendentes" ? (
          <>
            <TableAtendentes />
          </>
        ) : (
          currentSelection === "medicos" && (
            <>
              <TableMedicos />
            </>
          )
        )}
      </main>
    </DashboardContainer>
  );
};
export default Dashboard;
