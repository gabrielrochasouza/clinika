import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../../services";
import { tranforTimeInMinutes } from "../../utils";

const AgendaContext = createContext();

export const AgendaProvider = ({ children }) => {
    const [currentMedicoId, setCurrentMedicoId] = useState("");
    const [date, setDate] = useState(new Date());
    const [horarios, setHorarios] = useState([]);
    const [agendaId, setAgendaId] = useState("");

    useEffect(() => {
        const currentData = date.toLocaleDateString().replaceAll("/", "-");
        if (currentMedicoId !== "") {
            api.get(
                `agendas/medico/${currentMedicoId}/?data=${currentData}`
            ).then(({ data }) => setHorarios(data.results));
        }
    }, [currentMedicoId, date]);

    const createHorario = async (data) => {
        let result = false;
        if (
            tranforTimeInMinutes(data.horario_inicial) >
            tranforTimeInMinutes(data.horario_final)
        ) {
            toast.error("Horario final incorreto!");
            return result
        }
        if (data.horario_inicial.length < 5) {
            return toast.error("Horário inicial incorreto!");
        }
        if (data.horario_final.length < 5) {
            toast.error("Horário final incorreto!");
            return result
        }
        if (data.horario_inicial == data.horario_final) {
            toast.error("Horário final incorreto!");
            return result
        }
        await api
            .post(`agendas/medico/${currentMedicoId}/`, data)
            .then(() => {
                toast.success("Horário criado!!");
                result = true;
            })
            .catch((err) => {
                console.log(err);
                toast.error("Esse horário ja passou!!");
                result = false;
            });
        return result;
    };

    const getHorarios = async () => {
        const token = localStorage.getItem("@clinicaToken") || "";

        const currentData = date.toLocaleDateString().replaceAll("/", "-");
        await api
            .get(`agendas/medico/${currentMedicoId}/?data=${currentData}`, {
                headers: { authorization: `Bearer ${token}` },
            })
            .then(({ data }) => setHorarios(data.results));
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
