import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const ConsultaContext = createContext({});

export const ConsultaProvider = ({ children }) => {
    const [consultas, setConsultas] = useState({});

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

    const createConsulta = async (data, medicoId, pacienteId, agendaId) => {
        const token = localStorage.getItem("@clinicaToken") || "";
        const endpoint = `consultas/medico/${medicoId}/paciente/${pacienteId}/agenda/${agendaId}/`;
        await api
            .post(endpoint, data, {
                headers: { authorization: `Bearer ${token}` },
            })
            .then(() => toast.success("Consulta marcada!"));
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

    return (
        <ConsultaContext.Provider
            value={{ consultas, getConsultas, createConsulta, patchConsulta }}>
            {children}
        </ConsultaContext.Provider>
    );
};

export const useConsulta = () => useContext(ConsultaContext);
