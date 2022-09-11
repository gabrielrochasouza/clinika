import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const openClose = () => setOpen(!open);

  const login = async (data, setUserData) => {
    await api
      .post("/login/", data)
      .then(async (res) => {
        const accessToken = res.data.access;
        localStorage.setItem("@clinicaToken", accessToken);
        localStorage.setItem("@ultimoLogin", new Date().valueOf());
        toast.success("Login feito com sucesso");

        await setUserData()

      })
      .catch((err) => toast.error("Credenciais inválidas"));
  };
  const logout = () => {
    localStorage.clear();
    toast.success("Você foi Deslogado");
    navigate("/");
  };

  const changePassword = async (loginData, id, newPassword) => {
    await api
      .post("/login/", loginData)
      .then(async (res) => {
        const accessToken = res.data.access;
        localStorage.setItem("@clinicaToken", accessToken);
        localStorage.setItem("@ultimoLogin", new Date().valueOf());

        const token = localStorage.getItem("@clinicaToken") || "";

        await api
          .patch(`/usuarios/${id}/`, newPassword, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            toast.success("Senha Alterada com Sucesso!");
          })
          .catch((err) => {
            toast.error("Não foi possível alterar senha");
          });
      })
      .catch((err) => toast.error("Credenciais inválidas"));
  };

  return (
    <LoginContext.Provider
      value={{
        login,
        logout,
        open,
        openClose,
        changePassword,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
