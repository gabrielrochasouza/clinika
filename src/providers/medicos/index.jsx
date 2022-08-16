import { useContext, createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const MedicoContext = createContext({});

export const MedicoProvider = ({ children }) => {
  const [medicos, setMedicos] = useState({});

  const getMedicos = async () => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .get("usuarios/medico/listar/", { headers: { authorization: `Bearer ${token}` } })
      .then((res) => {
        setMedicos(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error no carregamento");
      });
  };

  return <MedicoContext.Provider value={{medicos, getMedicos}}>{children}</MedicoContext.Provider>;
};

export const useMedico = () => useContext(MedicoContext);
