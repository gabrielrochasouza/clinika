import { DivContainer } from "./styles";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

moment.locale("pt-BR");
const localizer = momentLocalizer(moment);

const AgendaHorarios = ({ date }) => {
    const [view, setView] = useState("day");

    return (
        <DivContainer>
            <Calendar
                defaultDate={date}
                localizer={localizer}
                onView={(newView) => setView(newView)}
                view={view}
                toolbar={false}
                formats={{
                    timeGutterFormat: (date, culture, localizer) =>
                        localizer.format(date, "HH:mm", culture),
                }}
                scrollToTime={new Date()}
            />
        </DivContainer>
    );
};
export default AgendaHorarios;
