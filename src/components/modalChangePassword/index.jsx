import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useForm } from "react-hook-form";
import Input from "../input";
import Button from "../submitButton";
import { useEffect, useState } from "react";
import { useUsuarios } from "../../providers/usuarios";
import { useLogin } from "../../providers/login";

const ModalChangePassword = () => {
  const { openModalChangePassword, openCloseModalChangePassword } = useModal();
  const { register, handleSubmit } = useForm();
  const [disable, setDisable] = useState(false);
  const { userData } = useUsuarios();

  const { changePassword } = useLogin()


  const submitCreatePaciente = async (data) => {
    setDisable(true);
    const {password, new_password} = data
    const {email, id} = userData
    await changePassword(
        {email:email,password:password},
        id,
        {password:new_password}
    )
    setDisable(false);
    openCloseModalChangePassword();
  };

  const status = userData.is_superuser ? "Admin" : (userData.is_staff ? "Atendente" : "Médico" )


  return (
    <>
      <Modal
        title={"Mudar Senha"}
        closeModal={openCloseModalChangePassword}
        bodyContent={
          <form onSubmit={handleSubmit(submitCreatePaciente)}>
            <span>Status da Conta:</span>
            <span style={{color:"var(--tx-t)"}}> {status}</span>
            <Input
              inputName={"Senha Atual"}
              name="password"
              isPassword
              register={register}
            />
            <Input
              inputName={"Nova Senha"}
              type="password"
              isPassword
              name="new_password"
              register={register}
            />
            <Button disabled={disable} text={"Mudar"} />

          </form>
        }
      />
    </>
  );
};
export default ModalChangePassword;