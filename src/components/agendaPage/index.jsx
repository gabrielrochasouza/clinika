import { DivContainer, DivContent } from "./styles";
import { useMedico } from "../../providers/medicos";
import { useAgenda } from "../../providers/agenda";
import Agenda from "../agenda";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FiX } from "react-icons/fi";
import ListMedicos from "../ListMedicos";
import Loader from "../loader";

const AgendaPage = () => {
    const [inputValue, setInputValue] = useState("");
    const { currentMedicoId, setCurrentMedicoId, date, setDate } = useAgenda();
    const { allMedicos, getAllMedicos } = useMedico();

    useEffect(() => {
        getAllMedicos(`?nome=${inputValue}`);
    }, [inputValue]);

    useEffect(() => {
        getAllMedicos();
    }, []);

    return (
        <DivContainer>
            <DivContent>
                <div className='div_medicos'>
                    <h3>Médicos</h3>
                    <div className='div_medicos_input'>
                        <input
                            placeholder='Buscar médico'
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }}
                        />
                        <div onClick={() => setInputValue("")}>
                            {inputValue && <FiX />}
                        </div>
                    </div>
                    {allMedicos.length !== 0 ? (
                        <ListMedicos
                            list={allMedicos}
                            currentMedicoId={currentMedicoId}
                            setCurrentMedicoId={setCurrentMedicoId}
                        />
                    ) : (
                        <Loader />
                    )}
                </div>
                <Calendar
                    locale='pt-BR'
                    value={date}
                    onChange={(value) => setDate(new Date(value))}
                />
            </DivContent>
            <Agenda />
        </DivContainer>
    );
};

export default AgendaPage;
