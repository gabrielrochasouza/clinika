import { Navigate } from "react-router-dom";
import SideMenu from "../../components/sideMenu";
import { compareTimePassedSinceLastLogin } from "../../utils";
import { DashboardContainer } from "./style";
import { BiMenu } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import Header from "../../components/header";
import InfoBoxes from "../../components/infoBoxes";

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
        <InfoBoxes/>
        <div className="tables">

       <div className="box-pacientes">
        <header>
        <h2>Pacientes</h2>
        <button>Criar Paciente</button>
        </header>

       </div>
       <div className="box-consultas">
        <header>
        <h2>Consultas de hoje</h2>
        <button>Criar Consulta</button>
        </header>
       </div>
        </div>
      </main>
    </DashboardContainer>
  );
};
export default Dashboard;
