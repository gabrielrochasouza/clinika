import { Navigate } from "react-router-dom";
import SideMenu from "../../components/sideMenu";
import { compareTimePassedSinceLastLogin } from "../../utils";
import { DashboardContainer } from "./style";
import Header from "../../components/header";
import InfoBoxes from "../../components/infoBoxes";
import TablePacientes from "../../components/tablePacientes";
import TableConsultas from "../../components/tableConsultas";
import TableMedicos from "../../components/tableMedicos";

const Dashboard = () => {
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
        <TablePacientes/>
        <TableConsultas/>
        <TableMedicos/>

      </main>
    </DashboardContainer>
  );
};
export default Dashboard;
