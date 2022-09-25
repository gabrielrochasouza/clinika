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
        openCloseModalConsultaDetails();
    };

    return (
        <Div>
            <div className='div_button_and_legenda'>
                <div className='div_legenda'>
                    <div className='div_legenda_1 div_legenda'>
                        <FaCircle />
                        <span>Marcado</span>
                    </div>
                    <div className='div_legenda_2 div_legenda'>
                        <FaCircle />
                        <span>Ja passou</span>
                    </div>
                    <div className='div_legenda_3 div_legenda'>
                        <FaCircle />
                        <span>Cancelado</span>
                    </div>
                </div>
                <button onClick={openCloseModalCreateConsulta}>
                    Criar nova consulta
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
            {openModalCreateConsulta && <ModalCreateConsulta />}
            {openModalConsultaDetails && (
                <ModalConsulta consultaId={consultaInfo.consulta.id} />
            )}
        </Div>
    );
};

export default Agenda;
