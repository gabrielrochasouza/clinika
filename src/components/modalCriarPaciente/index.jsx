import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useForm } from "react-hook-form";
import Input from "../input";
import Button from "../submitButton";
import { useEffect, useState } from "react";
import { cpfMask, dateBirthMask, telMask } from "../../masks";
import { useUsuarios } from "../../providers/usuarios";
import { useConvenio } from "../../providers/convenio";

const ModalCriarPaciente = () => {
  const { getConvenio, convenios } = useConvenio();
  useEffect(() => {
    getConvenio();
  }, []);

  const {getOverviewInfo} = useUsuarios()
  const { openCloseModalCreatePaciente } = useModal();
  const { register, handleSubmit } = useForm();
  const [disable, setDisable] = useState(false);
  const { getPacientes, createPacientes } = useUsuarios();
  const submitCreatePaciente = async (data) => {
    data = {
      ...data,
      data_nascimento: data["data_nascimento"].split("-").reverse().join("-"),
    };
    setDisable(true);
    await createPacientes(data);
    await getPacientes();
    await getOverviewInfo()
    setDisable(false);
    openCloseModalCreatePaciente();
  };
  const date = new Date();
  const todayDate = date.toLocaleDateString().split("/").reverse().join("-");
  const minDate = "1800-01-01";
  return (
    <>
      <Modal
        title={"Cadastrar paciente"}
        closeModal={openCloseModalCreatePaciente}
        bodyContent={
          <form onSubmit={handleSubmit(submitCreatePaciente)}>
            <Input
              inputName={"Insira o nome do paciente"}
              name="nome"
              register={register}
            />
            <Input
              inputName={"Insira o email do paciente"}
              type="email"
              name="email"
              register={register}
            />
            <Input
              inputName={"Insira o cpf do paciente"}
              name="cpf"
              mask={cpfMask}
              pattern=".{14}"
              title="Preencha totalmente o campo cpf"
              required
              register={register}
            />
            <Input
              inputName={"Insira o telefone do paciente"}
              mask={telMask}
              name="telefone"
              title="Quantidade de números no telefone é inválido"
              pattern=".{13,14}"
              register={register}
            />

            <Input
              inputName={"Selecione o convênio"}
              name="convenio"
              register={register}
              required
              isSelect
              options={
                <>
                  <option></option>
                  {convenios?.results &&
                    convenios?.results.map((convenio, i) => (
                      <option key={i} value={convenio.id}>
                        {convenio.tipo}
                      </option>
                    ))}
                </>
              }
            />

            <Input
              inputName={"Data de nascimento"}
              type={"date"}
              name="data_nascimento"
              register={register}
              max={todayDate}
              min={minDate}
              title="Data inválida"
            />

            <Button disabled={disable} text={"Criar"} />
          </form>
        }
      />
    </>
  );
};
export default ModalCriarPaciente;
