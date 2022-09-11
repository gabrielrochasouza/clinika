import { useContext, createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const MedicoContext = createContext({});

export const MedicoProvider = ({ children }) => {
  const [medicos, setMedicos] = useState({});

  const getMedicos = async (query) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    let endpoint = query ? `usuarios/medico/listar/${query}` : "usuarios/medico/listar/"
    await api
      .get(endpoint, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => {
        setMedicos(res.data);
      })
      .catch((err) => {
        toast.error("Error no carregamento");
      });
  };

  const createMedico = async(data)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .post("usuarios/medico/criar/", data, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => {
        toast.success("Médico criado")
      })
      .catch((err) => {
        const errors = err.response.data
        let message = Object.values(errors).flat().join('; ')
        toast.error(message.length ? message : "Error na criação");
      });
  }

  return <MedicoContext.Provider value={{medicos, getMedicos, createMedico}}>{children}</MedicoContext.Provider>;
};

export const useMedico = () => useContext(MedicoContext);
