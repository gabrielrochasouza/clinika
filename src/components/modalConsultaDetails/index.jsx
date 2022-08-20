import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useForm } from "react-hook-form";
import Input from "../input";
import { useState } from "react";
import { useConvenio } from "../../providers/convenio";
import Button from "../submitButton";

const ModalConsulta = ({consultaInfo}) => {
  const { openModalConsultaDetails, openCloseModalConsultaDetails } = useModal();


  return (
    <>
      <Modal
        title={"Consulta"}
        closeModal={openCloseModalConsultaDetails}
        bodyContent={
          <form >

            <h4>Informações</h4>
            <p>Descrição: {consultaInfo.descricao}</p>
            <p>Horário da consulta: {consultaInfo.agenda.horario_inicial} - {consultaInfo.agenda.horario_final} </p>
            <p>Dia da consulta: {consultaInfo.agenda.dia_da_consulta}</p>
            <p>Criado em: {consultaInfo.criado_em}</p>
            
            <div className="two-columns ">
                <p>Compareceu: {consultaInfo.compareceu ? "Sim": "Não"}</p>
                <p  className="undelineColored">Confirmar Presença</p>
            </div>
            
            <div className="two-columns">
                <p>Confirmado: {consultaInfo.confirmado ? "Sim": "Não"}</p>
                <p className="undelineColored">Confirmar Consulta</p>
            </div>

            <div className="two-columns">
                <p>Pago: {consultaInfo.pago ? "Sim": "Não"}</p>
                <p  className="undelineColored">Confirmar Pagamento</p>
            </div>
            
            <div className="two-columns upSpacing">
                <h4>Informação paciente</h4>
                <button>Ver Paciente</button>
            </div>
            <p>Nome: {consultaInfo.paciente.nome}</p>
            <p>Email: {consultaInfo.paciente.email}</p>
            <p>CPF: {consultaInfo.paciente.cpf}</p>
            <p>Status: {consultaInfo.paciente.status}</p>
            <p>Telefone: {consultaInfo.paciente.telefone}</p>
            <div className="two-columns upSpacing">
                <h4>Informação doutor</h4>
                <button>Ver Doutor</button>
            </div>
            <p>Nome: {consultaInfo.medico.nome}</p>
            <p>Email: {consultaInfo.medico.email}</p>
            <p>Especialidade: {consultaInfo.medico.especialidade}</p>
            <p>Registro Profissional: {consultaInfo.medico.registro_profissional}</p>
            <p>Telefone: {consultaInfo.medico.telefone}</p>
            <Button text={"Cancelar Consulta"}/>
          </form>
        }
      />
    </>
  );
};
export default ModalConsulta;
