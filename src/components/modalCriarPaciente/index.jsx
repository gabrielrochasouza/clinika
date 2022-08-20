import Modal from "../modal";
import { useModal } from "../../providers/modal";
import {useForm} from 'react-hook-form'
import Input from "../input";
import Button from "../submitButton";
import { useState } from "react";
import { cpfMask, dateBirthMask, telMask } from "../../masks";


const ModalCriarPaciente = ()=>{
    const {openCloseModalCreatePaciente} = useModal()
    const { register, handleSubmit } = useForm()
    const [disable, setDisable] = useState(false)

    const submitCreatePaciente = async (data)=>{
        setDisable(!disable)

    }


    return(
        <>
            <Modal title={"Cadastrar paciente"} closeModal={openCloseModalCreatePaciente} bodyContent={
                <form onSubmit={handleSubmit(submitCreatePaciente)}> 
                    <Input inputName={"Insira o nome do paciente"} name="nome" register={register} />
                    <Input inputName={"Insira o email do paciente"} type="email" name="email" register={register} />
                    <Input inputName={"Insira o cpf do paciente"} name="cpf" mask={cpfMask} register={register} />
                    <Input inputName={"Insira o telefone do paciente"} mask={telMask} name="telefone" register={register} />
                    <Input inputName={"Data de nascimento"} type={"date"} name="data_nascimento" register={register} />
                    <Input inputName={"Insira o convênio"} name="convenio" register={register} />
                    <Button disabled={disable} text={"Criar"} />
                </form>
            } />
        </>
    )
}
export default ModalCriarPaciente
