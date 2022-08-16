import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const ConvenioContext = createContext({});

export const ConvenioProvider = ({ children }) => {
  const createConvenio = async (tipo) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api.post(
          "convenios/", tipo,
            {
              headers: { 
                "Authorization": `Bearer ${token}`,
                "Content-Type":"application/json"
             },
              
            },
            
      )
      .then((res) => toast.success("Convênio criado!"))
      .catch((err) => {
        console.log(err);
        toast.error("Esse Convênio já existe");
      });
  };

  return (
    <ConvenioContext.Provider
      value={{
        createConvenio,
      }}
    >
      {children}
    </ConvenioContext.Provider>
  );
};
export const useConvenio = () => useContext(ConvenioContext);
