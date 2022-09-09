import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../../services";
import { tranforTimeInMinutes } from "../../utils";

const AgendaContext = createContext();

export const AgendaProvider = ({ children }) => {
    const [currentMedicoId, setCurrentMedicoId] = useState("");
    const [date, setDate] = useState(new Date());
    const [horarios, setHorarios] = useState([]);

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
        )
            return toast.error("Horario final incorreto!");
        await api.post(`agendas/medico/${currentMedicoId}/`, data)
            .then(() => {
                toast.success("Horário criado!!");
                result = true;
            })
            .catch((err) => {
                toast.error("Esse horário ja passou!!");
                result = false;
            });
        return result;
    };

    const getHorarios = () => {
        const currentData = date.toLocaleDateString().replaceAll("/", "-");
        api.get(`agendas/medico/${currentMedicoId}/?data=${currentData}`).then(
            ({ data }) => setHorarios(data.results)
        );
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
            }}>
            {children}
        </AgendaContext.Provider>
    );
};

export const useAgenda = () => useContext(AgendaContext);
