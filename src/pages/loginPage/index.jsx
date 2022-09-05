import LoginContainer from "./style";
import { FaLock } from "react-icons/fa";
import Input from "../../components/input";
import Button from "../../components/submitButton";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useLogin } from "../../providers/login";
import { Navigate } from "react-router-dom";
import { useUsuarios } from "../../providers/usuarios";

const LoginPage = () => {
  const { login } = useLogin();
  const {getData, getProfile} = useUsuarios()
  const { register, handleSubmit } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);


  const loginSubmission = async (data) => {
    setDisabled(true);
    const response = await login(data);
    await getProfile()
    setDisabled(false);
  };

  if (localStorage.getItem("@clinicaToken")) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <LoginContainer>
      {forgotPassword === false ? (
        <form className="box" onSubmit={handleSubmit(loginSubmission)}>
          <div className="icon-lock">
            <FaLock />
          </div>
          <h1>Entrar</h1>
          <span>Olá, Seja bem vindo, faça seu login.</span>
          <Input
            register={register}
            inputName="email"
            name={"email"}
            type={"email"}
          />
          <Input
            register={register}
            inputName="password"
            name={"password"}
            isPassword
          />
          <Button disabled={disabled} type={"submit"} text={"Entrar"} />
          <span
            className="forget-password"
            onClick={() => setForgotPassword(true)}
          >
            Esqueceu a senha?
          </span>
        </form>
      ) : (
        <form className="box" onSubmit={handleSubmit(() => setDisabled(true))}>
          <div className="icon-lock">
            <FaLock />
          </div>
          <h2>Digite seu email</h2>
          <span>Enviaremos um email para recuperar a senha</span>
          <Input
            register={register}
            inputName="email"
            name={"email"}
            type={"email"}
          />
          <Button disabled={disabled} type={"submit"} text={"Enviar"} />
          <span
            className="forget-password"
            onClick={() => {
              setForgotPassword(false);
              setDisabled(false);
            }}
          >
            Voltar
          </span>
        </form>
      )}
    </LoginContainer>
  );
};

export default LoginPage;
