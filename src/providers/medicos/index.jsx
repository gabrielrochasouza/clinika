import { useContext, createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const MedicoContext = createContext({});

export const MedicoProvider = ({ children }) => {
    const [medicos, setMedicos] = useState({});
    const [allMedicos, setAllMecicos] = useState([]);

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

    const getAllMedicos = async (query) => {
        const token = localStorage.getItem("@clinicaToken") || "";
        let endpoint = query
            ? `usuarios/medico/todos/${query}`
            : "usuarios/medico/todos/";
        await api
            .get(endpoint, {
                headers: { authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setAllMecicos(res.data);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error no carregamento");
            });
    };

    return (
        <MedicoContext.Provider
            value={{
                medicos,
                getMedicos,
                allMedicos,
                getAllMedicos,
            }}>
            {children}
        </MedicoContext.Provider>
    );
};

export const useMedico = () => useContext(MedicoContext);
