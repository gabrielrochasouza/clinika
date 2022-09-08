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


  const updateConvenio = async(data, id)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
    .patch(`convenios/${id}/`, data,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => toast.success("Convênio Atualizado"))
    .catch((err) => {
      const errors = err.response.data
      let message = Object.values(errors).flat().join('; ') || ''
      toast.error(message.length ? message : "Error na criação");
    });
  }


  const deleteConvenio = async(id)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
    .delete(`convenios/${id}/`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => toast.success("Convênio Excluido"))
    .catch((err) => {
      const errors = err.response.data
      let message = Object.values(errors).flat().join('; ') || ''
      toast.error(message.length ? message : "Error na criação");
    });
  }


  return (
    <ConvenioContext.Provider
      value={{
        createConvenio,
        getConvenio,
        convenios,
        updateConvenio,
        deleteConvenio
      }}
    >
      {children}
    </ConvenioContext.Provider>
  );
};
export const useConvenio = () => useContext(ConvenioContext);
