import { Toaster } from "react-hot-toast";
import Router from "./routes";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Router />
    </>
  );
}

export default App;
