import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const ConsultasMedicoContext = createContext({});

export const ConsultasMedicoProvider = ({ children }) => {
    const [consultasMedico, setConsultasMedico] = useState({});

    const getConsultas = async (id, date) => {
        const token = localStorage.getItem("@clinicaToken") || "";
        await api
            .get(`agendas/medico/${id}/?data=${date}`, {
                headers: { authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setConsultasMedico(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error no carregamento");
            });
    };

    return (
        <ConsultaContext.Provider value={{ consultasMedico, getConsultas }}>
            {children}
        </ConsultaContext.Provider>
    );
};

export const useConsultasMedico = () => useContext(ConsultasMedicoContext);
