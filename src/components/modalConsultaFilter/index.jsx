import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useForm } from "react-hook-form";
import Input from "../input";
import Button from "../submitButton";
import { useState } from "react";
import { useConsulta } from "../../providers/consultas";

const ModalConsultaFilter = () => {
  const { openCloseModalConsultaFilter } = useModal();
  const { getConsultas } = useConsulta();
  const { register, handleSubmit } = useForm();
  const [disable, setDisable] = useState(false);

  const submitFilter = async (data) => {
    setDisable(!disable);
    let query = data.data.split('-').reverse().join("-")
    await getConsultas(query)
    setDisable(false);
    openCloseModalConsultaFilter();
  };

  return (
    <>
      <Modal
        title={"Filtrar a consulta por dia "}
        closeModal={openCloseModalConsultaFilter}
        bodyContent={
          <form onSubmit={handleSubmit(submitFilter)}>
            <Input
              inputName={"Escolha a data a ser pesquisada"}
              name="data"
              type="date"
              register={register}
            />
            <Button disabled={disable} text={"Filtrar"} />
          </form>
        }
      />
    </>
  );
};
export default ModalConsultaFilter;
