import { DivContainer, DivContent, DivBody, Div } from "./styles";

import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

import AgendaTimes from "../agendaTimes";
import AgendaFrames from "../agendaFrames";
import AgendaEvents from "../agendaEvents";
import { useAgenda } from "../../providers/agenda";
import { useModal } from "../../providers/modal";
import ModalConsulta from "../modalConsultaDetails";
import ModalCriarHorario from "../modalCriarHorario";
import ModalCreateConsulta from "../modalCreateConsulta";

const Agenda = () => {
    const {
        openModalConsultaDetails,
        openCloseModalConsultaDetails,
        openModalCreateHorario,
        openCloseModalCreateHorario,
        openModalCreateConsulta,
        openCloseModalCreateConsulta,
    } = useModal();
    const [consultaInfo, setConsultaInfo] = useState({});
    const { currentMedicoId } = useAgenda();
    const nowRef = useRef(null);

    useEffect(() => {
        nowRef.current?.scrollIntoView({ block: "center" });
    }, []);

    const openModalConsulta = (data) => {
        setConsultaInfo(data);
        if (data.horario_marcado) {
            openCloseModalConsultaDetails();
        } else {
            openCloseModalCreateConsulta();
        }
    };

    const openModalCriarHorario = () => {
        if (!currentMedicoId) return toast.error("Selecione um medico");
        openCloseModalCreateHorario();
    };

    return (
        <Div>
            <button onClick={openModalCriarHorario}>
                Criar novo horário vago
            </button>
            <DivContainer>
                <DivContent>
                    <AgendaTimes />
                    <DivBody>
                        <AgendaFrames />
                        <AgendaEvents
                            openModal={openModalConsulta}
                            nowRef={nowRef}
                        />
                    </DivBody>
                </DivContent>
            </DivContainer>
            {openModalCreateConsulta && <ModalCreateConsulta />}
            {openModalConsultaDetails && (
                <ModalConsulta consultaInfo={consultaInfo} />
            )}
            {openModalCreateHorario && <ModalCriarHorario />}
        </Div>
    );
};

export default Agenda;
