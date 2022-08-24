import { SectionContainer, DivContainer, DivContent } from "./styles";
import AgendaHorarios from "../agendaHorarios";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

const Agenda = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        
    }, [date]);

    return (
        <SectionContainer>
            <DivContainer>
                <DivContent>
                    <input />
                    <select defaultValue={"inicial"}>
                        <option value={"inicial"}>selecionar médico</option>
                    </select>
                </DivContent>
                <Calendar
                    locale='pt-BR'
                    value={date}
                    onChange={(value) => setDate(value)}
                />
            </DivContainer>
            <AgendaHorarios date={date} />
        </SectionContainer>
    );
};

export default Agenda;
