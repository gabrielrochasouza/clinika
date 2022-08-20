import Modal from "../modal";
import { useModal } from "../../providers/modal";
import {useForm} from 'react-hook-form'
import Input from "../input";
import Button from "../submitButton";
import { useState } from "react";
import { cpfMask, dateBirthMask, telMask } from "../../masks";

const ModalCriarMedico = ()=>{
    const {openCloseModalCreateMedico} = useModal()
    const { register, handleSubmit } = useForm()
    const [disable, setDisable] = useState(false)
    const submitCreateMedico = async (data)=>{
        setDisable(!disable)
    }

    return(
        <>
            <Modal title={"Cadastrar Medico"} closeModal={openCloseModalCreateMedico} bodyContent={
                <form onSubmit={handleSubmit(submitCreateMedico)}> 
                    <Input inputName={"Insira o nome do Medico"} name="nome" register={register} />
                    <Input inputName={"Insira o email do Medico"} type="email" name="email" register={register} />
                    <Input inputName={"Insira o cpf do Medico"} name="cpf" mask={cpfMask} register={register} />
                    <div className="two-column" style={{display:"flex", margin:"-20px 0", gap:"12px"}}>
                        <Input inputName={"Insira o telefone do Medico"} mask={telMask} name="telefone" register={register} />
                        <Input inputName={"Data de nascimento"} name="data_nascimento" mask={dateBirthMask} register={register} />
                    </div>
                    <Input inputName={"Insira o convênio"} name="convenio" register={register} />
                    <Button disabled={disable} text={"Criar"} />
                </form>
            } />
        </>
    )
}
export default ModalCriarMedico
