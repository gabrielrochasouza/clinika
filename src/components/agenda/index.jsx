import { DivContainer, DivContent, DivBody } from "./styles";

import AgendaTimes from "../agendaTimes";
import AgendaFrames from "../agendaFrames";
import AgendaEvents from "../agendaEvents";
import ModalConsulta from "../modalConsultaDetails";

import { useModal } from "../../providers/modal";
import { useState } from "react";

const Agenda = () => {
    const { openModalConsultaDetails, openCloseModalConsultaDetails } =
        useModal();
    const [consultaInfo, setConsultaInfo] = useState({});
    const openModal = (data) => {
        setConsultaInfo(data);
        openCloseModalConsultaDetails();
    };

    return (
        <DivContainer>
            <DivContent>
                <AgendaTimes />
                <DivBody>
                    <AgendaFrames />
                    <AgendaEvents openModal={openModal} />
                </DivBody>
            </DivContent>
            {/* {openModalConsultaDetails && (
                <ModalConsulta consultaInfo={consultaInfo} />
            )} */}
        </DivContainer>
    );
};

export default Agenda;
