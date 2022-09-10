import { useAgenda } from "../../providers/agenda";
import { DivContainer, DivContent } from "./styles";
import { getPorcentXRelationY, tranforTimeInMinutes } from "../../utils";
import NowPointer from "../agendaNowPointer";

const AgendaEvents = ({ openModal, nowRef }) => {
    const { horarios, date } = useAgenda();

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
                        onClick={() => openModal(event)}
                        marcado={event.horario_marcado}
                        passou={event.horario_passou}
                        disponivel={event.horario_disponivel_para_marcar}
                        cancelada={event.consulta?.consulta_cancelada}>
                        <div />
                        <span>
                            {event.horario_inicial} - {event.horario_final}
                        </span>
                        <span>
                            -{" "}
                            {event.consulta
                                ? event.consulta.paciente.nome
                                : "Vago"}
                        </span>
                    </DivContent>
                ))}
            </div>
            <NowPointer date={date} nowRef={nowRef} />
        </DivContainer>
    );
};

export default AgendaEvents;
