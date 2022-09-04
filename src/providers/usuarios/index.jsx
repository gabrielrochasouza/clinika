import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api from "../../services";

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }) => {
  const [totalOfPatients, setTotalOfPatients] = useState(0);
  const [totalOfDoctors, setTotalOfDoctors] = useState(0);
  const [totalOfConsultasToday, setTotalOfConsultasToday] = useState(0);
  const [totalOfPatientsThatHaventPayed, setTotalOfPatientsThatHaventPayed] =
    useState(0);
  const [pacientes, setPacientes] = useState([]);

  const getOverviewInfo = async () => {
    const token = localStorage.getItem('@clinicaToken') || ''
    await api
      .get("usuarios/resumo/", {headers:{"authorization": `Bearer ${token}`}})
      .then((res) => {
        setTotalOfPatients(res.data.total_de_pacientes);
        setTotalOfDoctors(res.data.total_de_medicos);
        setTotalOfConsultasToday(res.data.total_agendado_hoje);
        setTotalOfPatientsThatHaventPayed(res.data.pacientes_inadimplentes);
      })
      .catch((err) => console.log(err));
    
  };

  const getPacientes = async (query) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    if(!query){
      await api
        .get("pacientes/", {headers:{"authorization": `Bearer ${token}`}})
        .then((res) => {
          setPacientes(res.data);
        })
        .catch((err) =>{
          console.log(err) 
          toast.error("Error no carregamento")
        });
    }else{
      await api
        .get(`pacientes/${query}`, {headers:{"authorization": `Bearer ${token}`}})
        .then((res) => {
          setPacientes(res.data);
        })
        .catch((err) =>{
          console.log(err) 
          toast.error("Error no carregamento")
        });

    }


  };

  const createPacientes = async (data)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
    .post("pacientes/",data, {headers:{"authorization": `Bearer ${token}`}})
    .then((res) => {
      toast.success("Paciente cadastrado com sucesso!")
    })
    .catch((err) =>{
      const errors = err.response.data
      let message = Object.values(errors).flat().join('; ')
      toast.error(message.length ? message : "Error na criação!");
    });
  }
  

  return (
    <UsuariosContext.Provider
      value={{
        totalOfDoctors,
        totalOfPatients,
        totalOfConsultasToday,
        totalOfPatientsThatHaventPayed,
        pacientes,
        getOverviewInfo,
        getPacientes,
        createPacientes
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuarios = () => useContext(UsuariosContext);
