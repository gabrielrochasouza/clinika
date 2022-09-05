import Modal from "../modal";
import { useModal } from "../../providers/modal";
import { useForm } from "react-hook-form";
import Input from "../input";
import Button from "../submitButton";
import { useEffect, useState } from "react";
import { useUsuarios } from "../../providers/usuarios";

const ModalProfileEdit = () => {
  const { openModalProfileEdit, openCloseModalProfileEdit } = useModal();
  const { register, handleSubmit } = useForm();
  const [disable, setDisable] = useState(false);
  const { userData, updateProfile, getProfile } = useUsuarios();

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  useEffect(() => {
    document.getElementById("nomeEdit").value = userData.nome;
    document.getElementById("emailEdit").value = userData.email;
  }, []);

  const submitCreatePaciente = async (data) => {
    setShowConfirmationModal(true);
  };

  const verifySubmission = async (data) => {
    setDisable(true);
    const requestData = {};
    const loginData = {email:userData.email, password: data.password };
    for (let key in data) {
      if (data[key] && key !== "password") requestData[key] = data[key];
    }
    await updateProfile(requestData, loginData, userData.id);
    await getProfile();
    setDisable(false);
    openCloseModalProfileEdit();
    setShowConfirmationModal(false);
  };

  const status = userData.is_superuser
    ? "Admin"
    : userData.is_staff
    ? "Atendente"
    : "Médico";

  return (
    <>
      {showConfirmationModal && (
        <Modal
          style={{ zIndex: "100" }}
          title={"Insira a senha para confirmar alteração"}
          closeModal={() => setShowConfirmationModal(!showConfirmationModal)}
          bodyContent={
            <form onSubmit={handleSubmit(verifySubmission)}>
              <Input
                inputName={"Senha Atual"}
                isPassword
                name="password"
                register={register}
              />
              <Button disabled={disable} text={"Editar"} />
            </form>
          }
        />
      )}

      <Modal
        title={"Editar Perfil"}
        closeModal={openCloseModalProfileEdit}
        bodyContent={
          <form onSubmit={handleSubmit(submitCreatePaciente)}>
            <span>Status da Conta:</span>
            <span style={{ color: "var(--tx-t)" }}> {status}</span>
            <Input
              inputName={"Nome"}
              name="nome"
              id={"nomeEdit"}
              register={register}
            />
            <Input
              inputName={"Email"}
              type="email"
              id={"emailEdit"}
              name="email"
              register={register}
            />
            <Button text={"Editar"} />
          </form>
        }
      />
    </>
  );
};
export default ModalProfileEdit;
