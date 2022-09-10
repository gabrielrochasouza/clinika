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

const ModalCreateConsulta = ({ agendaId, passou }) => {
    const { openCloseModalCreateConsulta } = useModal();
    const { pacientes, getAllPacientes, getPacientes } = useUsuarios();
    const { createConsulta } = useConsulta();
    const { currentMedicoId, getHorarios, deleteHorario } = useAgenda();
    const [currentPaciente, setCurrentPaciente] = useState(
        pacientes[0] || pacientes.results[0]
    );
    const { register, handleSubmit } = useForm();
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        getAllPacientes();
    }, []);

    const onSubmit = async (data) => {
        setDisable(true);
        await createConsulta(
            data,
            currentMedicoId,
            currentPaciente.id,
            agendaId
        );
        await getHorarios();
        openCloseModalCreateConsulta();
        setDisable(false);
    };

    const onChangeSelect = (id) => {
        setCurrentPaciente(pacientes.find((value) => value.id === id));
    };

    const onDeleteHorario = async () => {
        await deleteHorario(agendaId);
        await getHorarios();
        openCloseModalCreateConsulta();
    };

    return (
        <Modal
            closeModal={openCloseModalCreateConsulta}
            title={"Marcar consulta"}
            bodyContent={
                <StyledDiv passou={passou}>
                    <StyledInput
                        placeholder={"Buscar paciente"}
                        onChange={(e) =>
                            getPacientes(`?nome=${e.target.value}`)
                        }
                    />
                    <StyledSelect
                        onChange={(e) => onChangeSelect(e.target.value)}
                        placeholder={"Selecionar paciente"}>
                        {pacientes.results
                            ? pacientes.results.map((paciente) => (
                                  <option key={paciente.id} value={paciente.id}>
                                      {paciente.nome}
                                  </option>
                              ))
                            : pacientes.map((paciente) => (
                                  <option key={paciente.id} value={paciente.id}>
                                      {paciente.nome}
                                  </option>
                              ))}
                    </StyledSelect>
                    <p>NOME: {currentPaciente.nome}</p>
                    <p>EMAIL: {currentPaciente.email}</p>
                    <p>CPF: {currentPaciente.cpf}</p>
                    <p>TELEFONE: {currentPaciente.telefone}</p>
                    <p>
                        DATA DE NASCIMENTO: {currentPaciente?.data_nascimento}
                    </p>
                    <StyledH4>Descrição da consulta</StyledH4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <StyledTextArea required {...register("descricao")} />
                        <div>
                            <Button
                                disabled={disable}
                                text={"Criar conslta"}
                                className='button_criar'
                            />
                            <Button
                                type='button'
                                disabled={disable}
                                text={"Apagar horario"}
                                onClick={onDeleteHorario}
                            />
                        </div>
                    </form>
                </StyledDiv>
            }
        />
    );
};

export default ModalCreateConsulta;
