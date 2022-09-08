import { createContext, useContext, useState } from "react";

const AgendaContext = createContext();

export const AgendaProvider = ({ children }) => {
    const [currentMedicoId, setCurrentMedicoId] = useState("");
    const [date, setDate] = useState(new Date());
    const [horarios, setHorarios] = useState([]);

    return (
        <AgendaContext.Provider
            value={{
                currentMedicoId,
                setCurrentMedicoId,
                date,
                setDate,
                horarios,
                setHorarios,
            }}>
            {children}
        </AgendaContext.Provider>
    );
};

export const useAgenda = () => useContext(AgendaContext);
