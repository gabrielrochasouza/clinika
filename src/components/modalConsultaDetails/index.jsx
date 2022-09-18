import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useForm } from "react-hook-form";
import Input from "../input";
import { useEffect, useState } from "react";
import { useConvenio } from "../../providers/convenio";
import Button from "../submitButton";
import { useConsulta } from "../../providers/consultas";
import toast from "react-hot-toast";

const ModalConsulta = ({ consultaId }) => {
  const { openModalConsultaDetails, openCloseModalConsultaDetails } =
    useModal();
  const { patchConsulta, getConsultas, consultas } = useConsulta();
  const consultaInfo = consultas.results.find(
    (consulta) => consulta.id === consultaId,
  );
  return (
    <>
      {consultaInfo ? (
        <Modal
          title={"Consulta"}
          closeModal={openCloseModalConsultaDetails}
          bodyContent={
            <form>
              <h4>Informações</h4>
              <p>Descrição: {consultaInfo.descricao}</p>
              <p>
                Horário da consulta: {consultaInfo.agenda.horario_inicial} -{" "}
                {consultaInfo.agenda.horario_final}{" "}
              </p>
              <p>Dia da consulta: {consultaInfo.agenda.dia_da_consulta}</p>
              <p>Criado em: {consultaInfo.criado_em}</p>
              <div>
                <p style={{ display: "inline-block", marginRight: "8px" }}>
                  Compareceu: {consultaInfo.compareceu ? "Sim" : "Não"}{" "}
                </p>
                <p
                  onClick={async () => {
                    await patchConsulta(
                      { compareceu: !consultaInfo.compareceu },
                      consultaInfo.id,
                    );
                    await getConsultas();
                  }}
                  style={{ display: "inline-block" }}
                  className="undelineColored"
                >
                  {" "}
                  Confirmar Presença
                </p>
              </div>
              <div>
                <p style={{ display: "inline-block", marginRight: "8px" }}>
                  Confirmado: {consultaInfo.confirmado ? "Sim" : "Não"}
                </p>
                <p
                  onClick={async () => {
                    await patchConsulta(
                      { confirmado: !consultaInfo.confirmado },
                      consultaInfo.id,
                    );
                    await getConsultas();
                  }}
                  style={{ display: "inline-block" }}
                  className="undelineColored"
                >
                  {" "}
                  Confirmar Consulta
                </p>
              </div>

              <div>
                <p style={{ display: "inline-block", marginRight: "8px" }}>
                  Pago: {consultaInfo.pago ? "Sim" : "Não"}
                </p>
                <p
                  onClick={async () => {
                    await patchConsulta(
                      { pago: !consultaInfo.pago },
                      consultaInfo.id,
                    );
                    await getConsultas();
                  }}
                  style={{ display: "inline-block" }}
                  className="undelineColored"
                >
                  {" "}
                  Confirmar Pagamento
                </p>
              </div>

              <h4 style={{ marginTop: "16px" }}>Informação paciente</h4>
              <p>Nome: {consultaInfo.paciente.nome}</p>
              <p>Email: {consultaInfo.paciente.email}</p>
              <p>CPF: {consultaInfo.paciente.cpf}</p>
              <p>Status: {consultaInfo.paciente.status}</p>
              <p>Telefone: {consultaInfo.paciente.telefone}</p>
              <p className="undelineColored">Ver mais sobre o paciente</p>

              <h4 style={{ marginTop: "16px" }}>Informação doutor</h4>

              <p>Nome: {consultaInfo.medico.nome}</p>
              <p>Email: {consultaInfo.medico.email}</p>
              <p>Especialidade: {consultaInfo.medico.especialidade}</p>
              <p>
                Registro Profissional:{" "}
                {consultaInfo.medico.registro_profissional}
              </p>
              <p>Telefone: {consultaInfo.medico.telefone}</p>
              <p className="undelineColored">Ver mais sobre o médico</p>
              <Button
                text={
                  consultaInfo.consulta_cancelada
                    ? "Descancelar Consulta"
                    : "Cancelar Consulta"
                }
                onClick={async (e) => {
                  e.preventDefault();
                  await patchConsulta(
                    { consulta_cancelada: !consultaInfo.consulta_cancelada },
                    consultaInfo.id,
                  );
                  await getConsultas();
                }}
              />
            </form>
          }
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ModalConsulta;
