import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useUsuarios } from "../../providers/usuarios";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Button from "../submitButton";
import { StyledDiv, DivHorarios } from "./styles";
import { useConsulta } from "../../providers/consultas";
import { useAgenda } from "../../providers/agenda";
import Input from "../input";
import Loader from "../loader";
import { horarioMask } from "../../masks";

const ModalCreateConsulta = () => {
    const { openCloseModalCreateConsulta } = useModal();
    const { pacientes, getAllPacientes, getPacientes } = useUsuarios();
    const { createConsulta } = useConsulta();
    const { currentMedicoId, getHorarios, deleteHorario, date, createHorario } =
        useAgenda();
    const [currentPaciente, setCurrentPaciente] = useState({});
    const { register, handleSubmit } = useForm();
    const [disableCreateBtn, setDisableCreateBtn] = useState(false);

    useEffect(() => {
        getAllPacientes();
    }, []);

    const onSubmit = async (data) => {
        setDisableCreateBtn(true);
        const res = await createHorario({
            dia_da_consulta: data.dia_da_consulta
                .split("-")
                .reverse()
                .join("-"),
            horario_inicial: data.horario_inicial,
            horario_final: data.horario_final,
        });
        if (res.id) {
            await createConsulta(
                { descricao: data.descricao },
                currentMedicoId,
                currentPaciente.id,
                res.id
            );
            await getHorarios();
            openCloseModalCreateConsulta();
        }
        setDisableCreateBtn(false);
    };

    return (
        <Modal
            closeModal={openCloseModalCreateConsulta}
            title={"Marcar Consulta"}
            bodyContent={
                <StyledDiv>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='paciente-list'>
                            <Input
                                inputName={"Buscar Paciente"}
                                Icon={<></>}
                                id='paciente-search-input'
                                autoComplete='off'
                                placeholder={" "}
                                onChange={(e) =>
                                    getPacientes(`?nome=${e.target.value}`)
                                }
                            />
                            <ul>
                                {pacientes.length ? (
                                    pacientes.map((paciente) => (
                                        <li
                                            key={paciente.id}
                                            value={paciente.id}
                                            onClick={() => {
                                                setCurrentPaciente(paciente);
                                                document.getElementById(
                                                    "paciente-search-input"
                                                ).value = paciente.nome;
                                            }}>
                                            {paciente.nome}
                                        </li>
                                    ))
                                ) : pacientes.results ? (
                                    pacientes.results.map((paciente) => (
                                        <li
                                            key={paciente.id}
                                            value={paciente.id}
                                            onClick={() => {
                                                setCurrentPaciente(paciente);
                                                document.getElementById(
                                                    "paciente-search-input"
                                                ).value = paciente.nome;
                                            }}>
                                            {paciente.nome}
                                        </li>
                                    ))
                                ) : (
                                    <Loader />
                                )}
                            </ul>
                        </div>
                        <DivHorarios>
                            <Input
                                inputName={"Dia da consulta"}
                                type={"date"}
                                defaultValue={date
                                    .toLocaleDateString()
                                    .split("/")
                                    .reverse()
                                    .join("-")}
                                min={date
                                    .toLocaleDateString()
                                    .split("/")
                                    .reverse()
                                    .join("-")}
                                name='dia_da_consulta'
                                register={register}
                            />
                            <Input
                                inputName={"Horário inicial"}
                                autoComplete='off'
                                name='horario_inicial'
                                mask={horarioMask}
                                register={register}
                            />
                            <Input
                                inputName={"Horário final"}
                                autoComplete='off'
                                name='horario_final'
                                mask={horarioMask}
                                register={register}
                            />
                        </DivHorarios>
                        <Input
                            isTextarea
                            inputName={"Descrição da consulta"}
                            name={"descricao"}
                            register={register}
                        />
                        <span>Paciente Selecionado</span>
                        <p>NOME: {currentPaciente.nome || ""}</p>
                        <p>EMAIL: {currentPaciente.email || ""}</p>
                        <p>CPF: {currentPaciente.cpf || ""}</p>
                        <p>TELEFONE: {currentPaciente.telefone || ""}</p>
                        <p>
                            DATA DE NASCIMENTO:{" "}
                            {currentPaciente?.data_nascimento || ""}
                        </p>
                        <div>
                            <Button
                                disabled={disableCreateBtn}
                                text={"Criar Consulta"}
                                className='button_criar'
                            />
                        </div>
                    </form>
                </StyledDiv>
            }
        />
    );
};

export default ModalCreateConsulta;
