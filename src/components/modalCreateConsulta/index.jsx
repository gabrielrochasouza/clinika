import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useUsuarios } from "../../providers/usuarios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Button from "../submitButton";
import {
  StyledH4,
  StyledInput,
  StyledSelect,
  StyledTextArea,
  StyledDiv,
} from "./styles";
import { useConsulta } from "../../providers/consultas";
import { useAgenda } from "../../providers/agenda";
import Input from "../input";
import Loader from "../loader";

const ModalCreateConsulta = ({ agendaId, passou }) => {
  const { openCloseModalCreateConsulta } = useModal();
  const { pacientes, getAllPacientes, getPacientes } = useUsuarios();
  const { createConsulta } = useConsulta();
  const { currentMedicoId, getHorarios, deleteHorario } = useAgenda();
  const [currentPaciente, setCurrentPaciente] = useState(
    pacientes?.results[0]
  );
  const { register, handleSubmit } = useForm();
  const [disableCreateBtn, setDisableCreateBtn] = useState(false);
  const [disableDeleteBtn, setDisableDeleteBtn] = useState(false);

  useEffect(() => {
    getPacientes();
  }, []);
  const onSubmit = async (data) => {
    setDisableCreateBtn(true);
    await createConsulta(data, currentMedicoId, currentPaciente.id, agendaId);
    await getHorarios();
    openCloseModalCreateConsulta();
    setDisableCreateBtn(false);
  };

  const onChangeSelect = (id) => {
    setCurrentPaciente(pacientes.results.find((value) => value.id === id));
  };

  const onDeleteHorario = async () => {
    setDisableDeleteBtn(true);
    await deleteHorario(agendaId);
    await getHorarios();
    openCloseModalCreateConsulta();
    setDisableDeleteBtn(false);
  };

  return (
    <Modal
      closeModal={openCloseModalCreateConsulta}
      title={"Marcar Consulta"}
      bodyContent={
        <StyledDiv passou={passou}>
          <div className="paciente-list">
            <Input
              inputName={"Buscar Paciente"}
              Icon={<></>}
              id="paciente-search-input"
              autoComplete="off"
              placeholder={" "}
              onChange={(e) => getPacientes(`?nome=${e.target.value}`)}
            />
            <ul>
              {pacientes.results
                ? pacientes.results.map((paciente) => (
                    <li
                      key={paciente.id}
                      value={paciente.id}
                      onClick={() => {
                        onChangeSelect(paciente.id)
                        document.getElementById("paciente-search-input").value=paciente.nome
                      }}
                    >
                      {paciente.nome}
                    </li>
                )): <Loader/>
            }
            </ul>
          </div>


          <Input
            isTextarea
            inputName={"Descrição da consulta"}
            name={"descricao"}
            register={register}
          />
          <span>Paciente Selecionado</span>
          <p>NOME: {currentPaciente.nome}</p>
          <p>EMAIL: {currentPaciente.email}</p>
          <p>CPF: {currentPaciente.cpf}</p>
          <p>TELEFONE: {currentPaciente.telefone}</p>
          <p>DATA DE NASCIMENTO: {currentPaciente?.data_nascimento}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Button
                disabled={disableCreateBtn}
                text={"Criar Consulta"}
                className="button_criar"
              />
              <Button
                type="button"
                disabled={disableDeleteBtn}
                text={"Apagar Horário"}
                onClick={onDeleteHorario}
                style={{ backgroundColor: "var(--grey-p)" }}
              />
            </div>
          </form>
        </StyledDiv>
      }
    />
  );
};

export default ModalCreateConsulta;
