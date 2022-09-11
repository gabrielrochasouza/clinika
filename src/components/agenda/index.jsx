import { DivContainer, DivContent, DivBody, Div } from "./styles";

import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaCircle } from "react-icons/fa";
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
            <div className='div_button_and_legenda'>
                <div className='div_legenda'>
                    <div className='div_legenda_1 div_legenda'>
                        <FaCircle />
                        <span>Vago</span>
                    </div>
                    <div className='div_legenda_2 div_legenda'>
                        <FaCircle />
                        <span>Marcado</span>
                    </div>
                    <div className='div_legenda_3 div_legenda'>
                        <FaCircle />
                        <span>Ja passou</span>
                    </div>
                    <div className='div_legenda_4 div_legenda'>
                        <FaCircle />
                        <span>Cancelado</span>
                    </div>
                </div>
                <button onClick={openModalCriarHorario}>
                    Criar novo horário vago
                </button>
            </div>
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
            {openModalCreateConsulta && (
                <ModalCreateConsulta
                    agendaId={consultaInfo.id}
                    passou={consultaInfo.horario_passou}
                />
            )}
            {openModalConsultaDetails && (
                <ModalConsulta consultaId={consultaInfo.consulta.id} />
            )}
            {openModalCreateHorario && <ModalCriarHorario />}
        </Div>
    );
};

export default Agenda;
