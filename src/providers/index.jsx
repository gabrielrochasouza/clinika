import { ConsultaProvider } from "./consultas";
import { ConvenioProvider } from "./convenio";
import { LoginProvider } from "./login";
import { MedicoProvider } from "./medicos";
import { ModalProvider } from "./modal";
import { UsuariosProvider } from "./usuarios";

const Provider = ({ children }) => {
  return (
    <LoginProvider>
      <ModalProvider>
        <MedicoProvider>
          <ConsultaProvider>
            <ConvenioProvider>
              <UsuariosProvider>{children}</UsuariosProvider>
            </ConvenioProvider>
          </ConsultaProvider>
        </MedicoProvider>
      </ModalProvider>
    </LoginProvider>
  );
};

export default Provider;
