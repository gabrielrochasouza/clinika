import { LoginProvider } from "./login";
import { UsuariosProvider } from "./usuarios";

const Provider = ({ children }) => {
  return (
    <LoginProvider>
      <UsuariosProvider>{children}</UsuariosProvider>
    </LoginProvider>
  );
};

export default Provider;
