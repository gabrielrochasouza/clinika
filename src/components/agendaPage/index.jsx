import { DivContainer, DivContent, StyledLi, StyledUl } from "./styles";
import api from "../../services";
import { useMedico } from "../../providers/medicos";
import { useAgenda } from "../../providers/agenda";
import Agenda from "../agenda";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FiX } from "react-icons/fi";

const AgendaPage = () => {
    const [inputValue, setInputValue] = useState("");
    const { currentMedicoId, setCurrentMedicoId, date, setDate, setHorarios } =
        useAgenda();

    const { medicos, getMedicos, getMedicoByName } = useMedico();

    useEffect(() => {
        getMedicoByName(inputValue);
    }, [inputValue]);

    useEffect(() => {
        getMedicos();
        console.log(medicos);
    }, []);

    useEffect(() => {
        const currentData = date.toLocaleDateString().replaceAll("/", "-");
        if (currentMedicoId !== "") {
            api.get(
                `agendas/medico/${currentMedicoId}/?data=${currentData}`
            ).then(({ data }) => setHorarios(data.results));
        }
    }, [currentMedicoId, date]);

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
                    <StyledUl>
                        {medicos.results?.map((value) => (
                            <StyledLi
                                key={value.id}
                                id={value.id}
                                selected={
                                    currentMedicoId === value.id ? true : false
                                }
                                onClick={() => setCurrentMedicoId(value.id)}>
                                <span>{value.nome}</span>
                                <span>{value.especialidade}</span>
                            </StyledLi>
                        ))}
                    </StyledUl>
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
