import { useContext, createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const MedicoContext = createContext({});

export const MedicoProvider = ({ children }) => {
  const [medicos, setMedicos] = useState({});
  const [medico, setMedico] = useState([]); // criado para setar o médico clicado

  const getMedicos = async (query) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    let endpoint = query
      ? `usuarios/medico/listar/${query}`
      : "usuarios/medico/listar/";
    await api
      .get(endpoint, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => {
        setMedicos(res.data);
      })
      .catch((err) => {
        console.log(err);

        toast.error("Error no carregamento");
      });
  };

  const createMedico = async (data) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .post("usuarios/medico/criar/", data, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Médico criado");
      })
      .catch((err) => {
        const errors = err.response.data;
        let message = Object.values(errors).flat().join("; ");
        toast.error(message.length ? message : "Error na criação");
      });
  };

  const viewMedico = async (data) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    let endpoint = `usuarios/medico/${data.id}/`;
    console.log("endpoint ", endpoint);

    await api
      .get(endpoint, { headers: { authorization: `Bearer ${token}` } })
      .then((res) => {
        setMedico(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);

        toast.error("Error no carregamento");
      });

    return medico;
  };

  return (
    <MedicoContext.Provider
      value={{ medicos, medico, getMedicos, createMedico, viewMedico }}
    >
      {children}
    </MedicoContext.Provider>
  );
};

export const useMedico = () => useContext(MedicoContext);
