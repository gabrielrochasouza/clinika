import Modal from "../modal";
import { useModal } from "../../providers/modal";
import {useForm} from 'react-hook-form'
import Input from "../input";
import Button from "../submitButton";
import { useState } from "react";
import { useConvenio } from "../../providers/convenio";


const ModalConvenio = ()=>{
    const {openModalConvenio, openCloseModalConvenio} = useModal()
    const {createConvenio, getConvenio} = useConvenio()
    const { register, handleSubmit } = useForm()
    const [disable, setDisable] = useState(false)

    const submitCreateConvenio = async (data)=>{
        setDisable(!disable)
        await createConvenio(data)
        await getConvenio()
        setDisable(false)
        openCloseModalConvenio()
    }


    return(
        <>
            <Modal title={"Criar Convênio"} closeModal={openCloseModalConvenio} bodyContent={
                <form onSubmit={handleSubmit(submitCreateConvenio)}> 
                    <Input inputName={"Insira o nome do convênio"} name="tipo" register={register} />
                    <Button disabled={disable} text={"Criar"} />
                </form>
            } />
        </>
    )
}
export default ModalConvenio

