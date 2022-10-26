import { DivContainer, DivContent, DivBody, Div } from "./styles";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaCircle } from "react-icons/fa";
import AgendaTimes from "../agendaTimes";
import AgendaFrames from "../agendaFrames";
import AgendaEvents from "../agendaEvents";
import { useModal } from "../../providers/modal";
import ModalConsultaDetails from "../modalConsultaDetails";
import ModalCreateConsulta from "../modalCreateConsulta";
import { useAgenda } from "../../providers/agenda";
import { useLayoutEffect } from "react";

const Agenda = () => {
  const {
    openModalConsultaDetails,
    openCloseModalConsultaDetails,
    openModalCreateConsulta,
    openCloseModalCreateConsulta,
  } = useModal();
  const { horarios, date } = useAgenda();
  const [consultaInfo, setConsultaInfo] = useState({});
  const nowRef = useRef(null);
  const divRef = useRef(null);

  const scrollToView = () =>
    divRef.current.scrollTo(0, nowRef.current?.clientWidth - 300);

  useEffect(() => {
    scrollToView();
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
      <DivContainer ref={divRef}>
        <AgendaTimes />
        <DivBody>
          <AgendaFrames />
          <AgendaEvents
            openModal={openModalConsulta}
            nowRef={nowRef}
            horarios={horarios}
            date={date}
          />
        </DivBody>
      </DivContainer>
      {openModalCreateConsulta && <ModalCreateConsulta />}
      {openModalConsultaDetails && (
        <ModalConsultaDetails consultaId={consultaInfo?.consulta.id} />
      )}
    </Div>
  );
};

export default Agenda;
