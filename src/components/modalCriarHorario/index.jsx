import Modal from "../modal";
import { useAgenda } from "../../providers/agenda";
import { useModal } from "../../providers/modal";
import Input from "../input";
import Button from "../submitButton";
import { useForm } from "react-hook-form";
import { horarioMask } from "../../masks";
import toast from "react-hot-toast";
import { useState } from "react";

const ModalCriarHorario = () => {
    const { date, createHorario, getHorarios } = useAgenda();
    const { openCloseModalCreateHorario } = useModal();
    const { register, handleSubmit } = useForm();
    const [disable, setDisable] = useState(false);

    const onSubmit = async (data) => {
        setDisable(true);
        
        data.dia_da_consulta = data.dia_da_consulta
            .split("-")
            .reverse()
            .join("-");
        const res = await createHorario(data);

        if (res) {
            await getHorarios();
            openCloseModalCreateHorario();
        }
        setDisable(false);
    };

    return (
        <Modal
            title={"Criar novo horário vago"}
            closeModal={openCloseModalCreateHorario}
            bodyContent={
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    <Button disabled={disable} text={"Criar Horário"} />
                </form>
            }
        />
    );
};

export default ModalCriarHorario;
