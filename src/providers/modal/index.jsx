import { createContext, useState, useContext } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
    const [openModalConvenio, setOpenModalConvenio] = useState(false);
    const openCloseModalConvenio = () =>
        setOpenModalConvenio(!openModalConvenio);

    const [openModalCreatePaciente, setOpenModalCreatePaciente] =
        useState(false);
    const openCloseModalCreatePaciente = () =>
        setOpenModalCreatePaciente(!openModalCreatePaciente);

    const [openModalCreateMedico, setOpenModalCreateMedico] = useState(false);
    const openCloseModalCreateMedico = () =>
        setOpenModalCreateMedico(!openModalCreateMedico);

    const [openModalConsultaDetails, setOpenModalConsultaDetails] =
        useState(false);
    const openCloseModalConsultaDetails = () =>
        setOpenModalConsultaDetails(!openModalConsultaDetails);

    const [openModalConsultaFilter, setOpenModalConsultaFilter] =
        useState(false);
    const openCloseModalConsultaFilter = () =>
        setOpenModalConsultaFilter(!openModalConsultaFilter);

    const [openModalProfileEdit, setOpenModalProfileEdit] = useState(false);
    const openCloseModalProfileEdit = () =>
        setOpenModalProfileEdit(!openModalProfileEdit);

    const [openModalChangePassword, setOpenModalChangePassword] =
        useState(false);
    const openCloseModalChangePassword = () =>
        setOpenModalChangePassword(!openModalChangePassword);

    const [openModalCreateHorario, setOpenModalCreateHorario] = useState(false);
    const openCloseModalCreateHorario = () =>
        setOpenModalCreateHorario(!openModalCreateHorario);

    const [openModalCreateConsulta, setOpenModalCreateConsulta] = useState(false)
    const openCloseModalCreateConsulta = () => setOpenModalCreateConsulta(!openModalCreateConsulta)

    return (
        <ModalContext.Provider
            value={{
                openModalConvenio,
                openCloseModalConvenio,
                openModalCreatePaciente,
                openCloseModalCreatePaciente,
                openModalCreateMedico,
                openCloseModalCreateMedico,
                openModalConsultaDetails,
                openCloseModalConsultaDetails,
                openModalConsultaFilter,
                openCloseModalConsultaFilter,
                openModalProfileEdit,
                openCloseModalProfileEdit,
                openModalChangePassword,
                openCloseModalChangePassword,
                openModalCreateHorario,
                openCloseModalCreateHorario,
                openModalCreateConsulta,
                openCloseModalCreateConsulta,
            }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
