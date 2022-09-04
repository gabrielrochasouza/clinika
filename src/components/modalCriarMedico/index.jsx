import Modal from "../modal";
import { useModal } from "../../providers/modal";
import {useForm} from 'react-hook-form'
import Input from "../input";
import Button from "../submitButton";
import { useState } from "react";
import { cpfMask, dateBirthMask, telMask } from "../../masks";
import { useMedico } from "../../providers/medicos";

const ModalCriarMedico = ()=>{
    const {openCloseModalCreateMedico} = useModal()
    const { register, handleSubmit } = useForm()
    const [disable, setDisable] = useState(false)
    const {getMedicos, createMedico} = useMedico()
    const submitCreateMedico = async (data)=>{
        setDisable(true)
        await createMedico(data)
        await getMedicos()
        setDisable(false)
        openCloseModalCreateMedico()
    }

    return(
        <>
            <Modal title={"Cadastrar Medico"} closeModal={openCloseModalCreateMedico} bodyContent={
                <form onSubmit={handleSubmit(submitCreateMedico)}> 
                    <Input inputName={"Insira o nome do Medico"} name="nome" register={register} />
                    <Input inputName={"Insira o email do Medico"} type="email" name="email" register={register} />
                    <Input inputName={"Insira a senha do Medico"} type="password" name="password" register={register} />
                    <Input inputName={"Insira a especialidade do Medico"} name="especialidade" register={register} />
                    <Input inputName={"Insira o telefone do Medico"} name="telefone" mask={telMask} register={register} />
                    <Input inputName={"Insira o registro profissional do Medico"} name="registro_profissional" register={register} />
                    <Button disabled={disable} text={"Criar"} />
                </form>
            } />
        </>
    )
}
export default ModalCriarMedico
