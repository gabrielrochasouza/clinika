import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useUsuarios } from "../../providers/usuarios";
import Input from "../input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../submitButton";
import { StyledInput, StyledSelect } from "./styles";
import { useEffect } from "react";

const ModalCreateConsulta = () => {
    const { openCloseModalCreateConsulta } = useModal();
    const { pacientes, getPacientes } = useUsuarios();
    const [currentPaciente, setCurrentPaciente] = useState({});
    const { register, handleSubmit } = useForm();
    const [disable, setDisable] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    const onChangeFun = (id) => {
        if (id !== "selecionar paciente") {
            setCurrentPaciente(
                pacientes.results.find((value) => value.id === id)
            );
        }
    };

    useEffect(() => {
        console.log(currentPaciente);
    }, [currentPaciente]);

    return (
        <Modal
            closeModal={openCloseModalCreateConsulta}
            title={"Marcar consulta"}
            bodyContent={
                <div>
                    <StyledInput
                        placeholder={"Buscar paciente"}
                        onChange={(e) =>
                            getPacientes(`?nome=${e.target.value}`)
                        }
                    />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <StyledSelect
                            onChange={(e) => onChangeFun(e.target.value)}>
                            <option
                                key={"Selecionar paciente"}
                                value={"selecionar paciente"}>
                                Selecionar paciente
                            </option>
                            {pacientes.results?.map((paciente) => (
                                <option key={paciente.id} value={paciente.id}>
                                    {paciente.nome}
                                </option>
                            ))}
                        </StyledSelect>
                        <p>CPF:</p>
                        <Button disabled={disable} text={"Criar conslta"} />
                    </form>
                </div>
            }
        />
    );
};

export default ModalCreateConsulta;
