import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../../services";
import { tranforTimeInMinutes } from "../../utils";

const AgendaContext = createContext();

export const AgendaProvider = ({ children }) => {
  const [currentMedicoId, setCurrentMedicoId] = useState("");
  const [date, setDate] = useState();
  const [horarios, setHorarios] = useState([]);
  const [agendaId, setAgendaId] = useState("");

  useEffect(() => {
    const currentData = date?.toLocaleDateString().replaceAll("/", "-");
    if (currentMedicoId !== "") {
      api
        .get(`agendas/medico/${currentMedicoId}/?data=${currentData}`)
        .then(({ data }) => setHorarios(data.results));
    }
  }, [currentMedicoId, date]);

  const createHorario = async (data) => {
    let res = {};
    await api
      .post(`agendas/medico/${currentMedicoId}/`, data)
      .then(({ data }) => {
        res = data;
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.detail);
      });
    return res;
  };

  const getHorarios = async () => {
    const token = localStorage.getItem("@clinicaToken") || "";

    const currentData = date.toLocaleDateString().replaceAll("/", "-");
    await api
      .get(`agendas/medico/${currentMedicoId}/?data=${currentData}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        console.log(data);
        setHorarios(data.results);
      });
  };

  const deleteHorario = async (id) => {
    const token = localStorage.getItem("@clinicaToken") || "";

    await api
      .delete(`agendas/${id}/`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then(() => toast.success("Horario apagado!"))
      .catch(() => toast.error("Erro em apagar horario!"));
  };

  return (
    <AgendaContext.Provider
      value={{
        currentMedicoId,
        setCurrentMedicoId,
        date,
        setDate,
        horarios,
        createHorario,
        getHorarios,
        agendaId,
        setAgendaId,
        deleteHorario,
      }}>
      {children}
    </AgendaContext.Provider>
  );
};

export const useAgenda = () => useContext(AgendaContext);
