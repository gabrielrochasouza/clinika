import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Input from "./components/input";
import LightDark from "./components/lightDark";
import ModalConvenio from "./components/modalConvenio";
import ModalCriarMedico from "./components/modalCriarMedico";
import ModalCriarPaciente from "./components/modalCriarPaciente";
import { useModal } from "./providers/modal";
import Router from "./routes";
import GlobalStyle from "./styles/globalStyle";
import { lightThemeObject, darkThemeObject } from "./styles/themes";

function App() {
  const currentThemeBool = localStorage.getItem("@currentTheme")
    ? JSON.parse(localStorage.getItem("@currentTheme")).currentTheme
    : false;
  const [darkTheme, setDarkTheme] = useState(currentThemeBool);
  const changeTheme = () => {
    localStorage.setItem(
      "@currentTheme",
      JSON.stringify({ currentTheme: !darkTheme })
    );
    setDarkTheme(!darkTheme);
  };
  const { openModalConvenio, openModalCreatePaciente, openModalCreateMedico } = useModal();

  return (
    <>
      <GlobalStyle theme={darkTheme ? darkThemeObject : lightThemeObject} />
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
      <LightDark changeTheme={changeTheme} darkTheme={darkTheme} />
      {openModalConvenio && <ModalConvenio />}
      {openModalCreatePaciente && <ModalCriarPaciente />}
      {openModalCreateMedico && <ModalCriarMedico/>}
    </>
  );
}

export default App;
