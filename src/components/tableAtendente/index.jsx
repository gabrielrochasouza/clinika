import Table from "../table";
import { useEffect } from "react";
import { useModal } from "../../providers/modal";
import Loader from "../loader";
import Empty from "../empty";
import { useUsuarios } from "../../providers/usuarios";
import { MdDisabledByDefault } from "react-icons/md";
import { useState } from "react";
import Modal from "../modal";
import Input from "../input";
import { useForm } from "react-hook-form";
import Button from "../submitButton";


const TableAtendentes = () => {
  const { getAtendentes, atendentes,createAtendente,deactivateAccount, userData } = useUsuarios();
  const [openModalCreate, setOpenModalCreate ] = useState(false)
  const [openModalDisable, setOpenModalDisable] = useState(false) 
  const [openModalConfirmation, setOpenModalConfirmation] = useState(false)
  const {register, handleSubmit} = useForm()
  const [currentId, setCurrentId] = useState("")
  const [disabledCreate, setDisabledCreate] = useState(false)
  const [disabledUpdate, setDisabledUpdate] = useState(false)

  useEffect(() => {
    getAtendentes();
  }, []);
  return (
    <>
      <Table
        headerTitle={"Atendentes"}
        headerBtn={
          <>
            <button onClick={()=>setOpenModalCreate(true)}>
              Cadastrar Atendente
            </button>
          </>
        }
        next={atendentes?.next}
        previous={atendentes?.previous}
        getFunction={getAtendentes}
        count={atendentes?.count}
        tableHeader={
          <>
            <span className="nome">Nome</span>
            <span className="email">Email</span>
            <span className="consultas">Cadastrado em</span>
            <span className="consultas">Conta ativa</span>
            <span className="consultas">Desativar Conta</span>
          </>
        }
        body={
          <>
            {atendentes?.results ? (
              atendentes.results.length === 0 ? (
                <Empty />
              ) : (
                atendentes.results.map((atendente) => (
                  <li key={atendente.id}>
                    <span className="nome">{atendente.nome}</span>
                    <span className="email">{atendente.email}</span>
                    <span className="criado_em">{atendente.criado_em}</span>
                    <span className="criado_em">{atendente.is_active ? "Sim": "Não"}</span>
                    <span 
                    className="desativar"
                    onClick={()=>{
                        setCurrentId(atendente.id)   
                        setOpenModalDisable(true) 
                    }} 
                    > <MdDisabledByDefault/> </span>
                  </li>
                ))
              )
            ) : (
              <Loader />
            )}
          </>
        }
      />

        {openModalCreate && (
            <Modal
                title={"Cadastrar Atendente"}
                closeModal={()=>setOpenModalCreate(false)}
                bodyContent={
                    <form onSubmit={handleSubmit(async(data)=>{
                        setDisabledCreate(true)
                        await createAtendente(data)
                        await getAtendentes()
                        setOpenModalCreate(false)
                        setDisabledCreate(false)
                    })}>
                    <Input register={register} inputName="Insira o nome"  name="nome"/>
                    <Input register={register} inputName="Insira o email" type="email" name="email"/>
                    <Input register={register} inputName="Insira a senha" isPassword name="password"/>
                    <Button text={"Criar"} disabled={disabledCreate}/>
                    </form>
                }
            />
        )}

        {openModalDisable && (
            <Modal
            title={"Desativar Conta"}
            closeModal={()=>setOpenModalDisable(false)}
            bodyContent={
                <>
                    <p>Tem Certeza que deseja desativar essa conta?</p>
                    <Button text={"Desativar"} onClick={()=>{
                        setOpenModalConfirmation(true)
                        setOpenModalDisable(false)
                    }}/>
                </>
            }
            />
        )}

        {openModalConfirmation && (
            <Modal
            title={"Confirmar a desativação"}
            closeModal={()=>setOpenModalConfirmation(false)}
            
            bodyContent={
                <form onSubmit={handleSubmit(async(data)=>{
                    setDisabledUpdate(true)
                    const loginData = {
                        password: data.passwordConfirmation,
                        email: userData.email
                    }
                    await deactivateAccount(currentId,{
                        is_active: false
                    } ,loginData)
                    await getAtendentes()
                    setOpenModalConfirmation(false)
                    setDisabledUpdate(false)
                })}>
                    <p>Insira a senha atual para poder prosseguir</p>
                    <Input register={register} inputName="Insira a senha" isPassword name="passwordConfirmation"/>
                    <Button disabled={disabledUpdate} text={"Desativar"} />
                </form>
            }
            />
        )}


    </>
  );
};

export default TableAtendentes;
