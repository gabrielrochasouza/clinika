import { useEffect, useState } from "react";
import { useAgenda } from "../../providers/agenda";
import { DivContainer, DivContent, DivNow } from "./styles";
import { FaCaretRight } from "react-icons/fa";

import { getPorcentXRelationY, tranforTimeInMinutes } from "../../utils";

const AgendaEvents = ({ openModal, nowRef }) => {
    const { horarios, date } = useAgenda();
    const [now, setNow] = useState(
        new Date(Date.now()).toLocaleString().replaceAll("/", "-").split(" ")
    );

    setInterval(() => {
        setNow(
            new Date(Date.now())
                .toLocaleString()
                .replaceAll("/", "-")
                .split(" ")
        );
    }, 10000);

    return (
        <DivContainer>
            <div>
                {horarios.map((event) => (
                    <DivContent
                        key={event.id}
                        ini={getPorcentXRelationY(
                            tranforTimeInMinutes(event.horario_inicial),
                            1440
                        )}
                        end={getPorcentXRelationY(
                            tranforTimeInMinutes(event.horario_final),
                            1440
                        )}
                        onClick={() => openModal(event)}>
                        <span>
                            {event.horario_inicial} - {event.horario_final}
                        </span>
                        <span>
                            {event.consulta ? "marcado" : "Horario vago"}
                        </span>
                    </DivContent>
                ))}
            </div>
            <DivNow
                inv={
                    date.toLocaleDateString().replaceAll("/", "-") === now[0]
                        ? false
                        : true
                }
                ref={nowRef}
                ini={getPorcentXRelationY(tranforTimeInMinutes(now[1]), 1440)}>
                <FaCaretRight />
            </DivNow>
        </DivContainer>
    );
};

export default AgendaEvents;
