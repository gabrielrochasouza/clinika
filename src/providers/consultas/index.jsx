import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const ConsultaContext = createContext({});

export const ConsultaProvider = ({ children }) => {
  const [consultas, setConsultas] = useState({});
  const [consultaMedico, setConsultaMedico] = useState([]);

  const getConsultas = async (data) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    const endpoint = data ? `consultas/?data=${data}` : "consultas/";
    await api
      .get(endpoint, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setConsultas(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error no carregamento");
      });
  };

  const patchConsulta = async (data, id) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    const endpoint = `consultas/${id}/`;
    await api
      .patch(endpoint, data, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(async (res) => {
        toast.success("Consulta atualizada");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error no carregamento");
      });
  };
  const getConsultaByMedico = async (id) => {
    console.log("ID", id);
    const token = localStorage.getItem("@clinicaToken") || "";
    const endpoint = `consultas/medico/${id}/`;
    await api
      .get(endpoint, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(async (res) => {
        setConsultaMedico(res.data.results);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro no carregamento");
      });
  };

  return (
    <ConsultaContext.Provider
      value={{
        consultas,
        consultaMedico,
        getConsultas,
        patchConsulta,
        getConsultaByMedico,
      }}
    >
      {children}
    </ConsultaContext.Provider>
  );
};

export const useConsulta = () => useContext(ConsultaContext);
