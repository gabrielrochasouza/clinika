import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const ConvenioContext = createContext({});

export const ConvenioProvider = ({ children }) => {
  const createConvenio = async (tipo) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .post("convenios/", tipo, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => toast.success("Convênio criado!"))
      .catch((err) => {
        console.log(err);
        toast.error("Esse Convênio já existe");
      });
  };
  const [convenios, setConvenio] = useState({})

  const getConvenio = async () => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .get("convenios/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setConvenio(res.data))
      .catch((err) => {
        const errors = err.response.data
        let message = Object.values(errors).flat().join('; ') || ''
        toast.error(message.length ? message : "Error na criação");
      });
  };

  return (
    <ConvenioContext.Provider
      value={{
        createConvenio,
        getConvenio,
        convenios
      }}
    >
      {children}
    </ConvenioContext.Provider>
  );
};
export const useConvenio = () => useContext(ConvenioContext);
