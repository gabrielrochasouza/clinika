import { ConsultaProvider } from "./consultas";
import { ConvenioProvider } from "./convenio";
import { DashboardProvider } from "./dashboard";
import { LoginProvider } from "./login";
import { MedicoProvider } from "./medicos";
import { ModalProvider } from "./modal";
import { UsuariosProvider } from "./usuarios";
import { AgendaProvider } from "./agenda";

const Provider = ({ children }) => {
    return (
        <LoginProvider>
            <ModalProvider>
                <MedicoProvider>
                    <ConsultaProvider>
                        <ConvenioProvider>
                            <DashboardProvider>
                                <UsuariosProvider>
                                    <AgendaProvider>{children}</AgendaProvider>
                                </UsuariosProvider>
                            </DashboardProvider>
                        </ConvenioProvider>
                    </ConsultaProvider>
                </MedicoProvider>
            </ModalProvider>
        </LoginProvider>
    );
};

export default Provider;
