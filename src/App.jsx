import { useState } from "react";
import { Toaster } from "react-hot-toast";
import LightDark from "./components/lightDark";
import Router from "./routes";
import GlobalStyle from "./styles/globalStyle";
import {lightThemeObject, darkThemeObject} from './styles/themes'

function App() {
  const currentThemeBool = localStorage.getItem('@currentTheme') ? JSON.parse(localStorage.getItem('@currentTheme')).currentTheme : false
  const [darkTheme, setDarkTheme] = useState(currentThemeBool)
  const changeTheme = ()=>{
    localStorage.setItem('@currentTheme', JSON.stringify({currentTheme:!darkTheme}))
    setDarkTheme(!darkTheme)
  }
  return (
    <>
      <GlobalStyle theme={darkTheme ? darkThemeObject: lightThemeObject} />
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
      <LightDark changeTheme={changeTheme} darkTheme={darkTheme}/>
    </>
  );
}

export default App;
