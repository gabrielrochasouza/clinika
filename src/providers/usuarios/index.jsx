import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import api, { imgur_api } from "../../services";

const UsuariosContext = createContext({});

export const UsuariosProvider = ({ children }) => {
  const [totalOfPatients, setTotalOfPatients] = useState(0);
  const [totalOfDoctors, setTotalOfDoctors] = useState(0);
  const [totalOfConsultasToday, setTotalOfConsultasToday] = useState(0);
  const [totalOfPatientsThatHaventPayed, setTotalOfPatientsThatHaventPayed] =
    useState(0);
  const [pacientes, setPacientes] = useState([]);

  const getOverviewInfo = async () => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .get("usuarios/resumo/", {
        headers: { authorization: `Bearer ${token}` },
      })
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
    if (!query) {
      await api
        .get("pacientes/", { headers: { authorization: `Bearer ${token}` } })
        .then((res) => {
          setPacientes(res.data);
        })
        .catch((err) => {
          toast.error("Error no carregamento");
        });
    } else {
      await api
        .get(`pacientes/${query}`, {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setPacientes(res.data);
        })
        .catch((err) => {
          toast.error("Error no carregamento");
        });
    }
  };

  const getAllPacientes = async () => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .get("pacientes/todos/", { headers: { authorization: `Bearer ${token}` } })
      .then((res) => {
        setPacientes(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error no carregamento");
      })
  } 

  const createPacientes = async (data) => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .post("pacientes/", data, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Paciente cadastrado com sucesso!");
      })
      .catch((err) => {
        const errors = err.response.data;
        let message = Object.values(errors).flat().join("; ");
        toast.error(message.length ? message : "Error na criação!");
      });
  };

  const [userData, setUserData] = useState(
    localStorage.getItem("@userData")
      ? JSON.parse(localStorage.getItem("@userData"))
      : {}
  );

  const getProfile = async () => {
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
      .get("usuarios/profile/", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data);
        localStorage.setItem("@userData", JSON.stringify(res.data));
      })
      .catch((err) => {
        const errors = err.response.data;
        let message = Object.values(errors).flat().join("; ");
        toast.error(message.length ? message : "Error no login!");
      });
  };



  const updateProfile = async (data, loginData, id) => {
    const token = localStorage.getItem("@clinicaToken") || "";

    await api
      .post("/login/", loginData)
      .then(async (res) => {
        const accessToken = res.data.access;
        localStorage.setItem("@clinicaToken", accessToken);
        localStorage.setItem("@ultimoLogin", new Date().valueOf());
        const token = localStorage.getItem("@clinicaToken") || "";

        await api
          .patch(`/usuarios/${id}/`, data, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            toast.success("Perfil Atualizado com Sucesso!");
          })
          .catch((err) => {
            const errors = err.response.data;
            let message = Object.values(errors).flat().join("; ");
            toast.error(
              message.length ? message : "Não foi possível atualizar."
            );
          });
      })
      .catch((err) => toast.error("Credenciais inválidas"));
  };


  const [atendentes, setAtendentes ]= useState({})

  const getAtendentes = async()=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
    .get(`/usuarios/atendentes/`,{
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setAtendentes(res.data)
    })
    .catch((err) => {
      const errors = err.response.data;
      let message = Object.values(errors).flat().join("; ");
      toast.error(
        message.length ? message : "Não foi possível atualizar."
      );
    });
  }


  const createAtendente = async(data)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
    .post(`/usuarios/`,data,{
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => {
      toast.success("Atendente criado com sucesso!")
    })
    .catch((err) => {
      const errors = err.response.data;
      let message = Object.values(errors).flat().join("; ");
      toast.error(
        message.length ? message : "Não foi possível atualizar."
      );
    });
  }


  const deactivateAccount = async(id, data, loginData)=>{
    const token = localStorage.getItem("@clinicaToken") || "";

    await api
      .post("/login/", loginData)
      .then(async (res) => {
        const accessToken = res.data.access;
        localStorage.setItem("@clinicaToken", accessToken);
        localStorage.setItem("@ultimoLogin", new Date().valueOf());
        const token = localStorage.getItem("@clinicaToken") || "";

        await api
          .patch(`/usuarios/ativar-desativar/${id}/`, data, {
            headers: { authorization: `Bearer ${token}` },
          })
          .then((res) => {
            toast.success("Alteração bem sucedida!");
          })
          .catch((err) => {
            const errors = err.response.data;
            let message = Object.values(errors).flat().join("; ");
            toast.error(
              message.length ? message : "Não foi possível atualizar."
            );
          });
      })
      .catch((err) => toast.error("Credenciais inválidas"));
  }

  const [currentImageSelected, setCurrentImage] = useState("")


  const generateUrl = async(file)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    const formData = new FormData()
    formData.append("sampleFile", file)
    await imgur_api.post("/upload/",formData, {
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    .then((res)=>{
      if(!res.data?.image_url) throw new Error
      setCurrentImage(res.data.image_url)
      toast.success("Upload bem sucedido")
    }).catch((err) => {
      toast.error("Imagem não conseguiu ser carregada, tente novamente")
    })
  }


  const updateProfileImage = async(id, data)=>{
    const token = localStorage.getItem("@clinicaToken") || "";
    await api
    .patch(`/usuarios/${id}/`, data, {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((res) => {
      toast.success("Perfil Atualizado com Sucesso!");
    })
    .catch((err) => {
      const errors = err.response.data;
      let message = Object.values(errors).flat().join("; ");
      toast.error(
        message.length ? message : "Não foi possível atualizar."
      );
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
        createPacientes,
        getProfile,
        userData,
        updateProfile,
        getAtendentes,
        atendentes,
        createAtendente,
        deactivateAccount,
        getAllPacientes,
        generateUrl,
        currentImageSelected,
        setCurrentImage,
        updateProfileImage
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuarios = () => useContext(UsuariosContext);
