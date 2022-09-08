import Table from "../table";
import { useEffect } from "react";
import { useModal } from "../../providers/modal";
import Loader from "../loader";
import Empty from "../empty";
import { useConvenio } from "../../providers/convenio";
import { FiEdit2, FiTrash } from "react-icons/fi";
import { useState } from "react";
import Modal from "../modal";
import Input from "../input";
import Button from "../submitButton";
import { useForm } from "react-hook-form";

const TableConvenios = () => {
  const { convenios, getConvenio, updateConvenio, deleteConvenio } =
    useConvenio();
  const { openCloseModalConvenio } = useModal();
  const [excludeModal, setExcludeModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [currentId, setCurrentId] = useState("");

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    getConvenio();
  }, []);
  return (
    <>
      <Table
        headerTitle={"Convenio"}
        headerBtn={
          <>
            <button onClick={openCloseModalConvenio}>Criar Convênio</button>
          </>
        }
        next={convenios?.next}
        previous={convenios?.previous}
        getFunction={getConvenio}
        count={convenios?.count}
        tableHeader={
          <>
            <span className="tipo">Tipo</span>
            <span className="edit">Editar</span>
            <span className="erase">Excluir</span>
          </>
        }
        body={
          <>
            {convenios?.results ? (
              convenios.results.length === 0 ? (
                <Empty />
              ) : (
                convenios.results.map((convenio) => (
                  <li key={convenio.id}>
                    <span className="tipo">{convenio.tipo}</span>
                    <span className="edit">
                      <FiEdit2
                        onClick={() => {
                          setEditModal(true);
                          setCurrentId(convenio.id);
                          setTimeout(() => {
                            document.getElementById("tipo").value =
                              convenio.tipo;
                          }, 200);
                        }}
                      />
                    </span>
                    <span className="erase">
                      {" "}
                      <FiTrash
                        onClick={() => {
                          setExcludeModal(true);
                          setCurrentId(convenio.id);
                        }}
                      />{" "}
                    </span>
                  </li>
                ))
              )
            ) : (
              <Loader />
            )}
          </>
        }
      />
      {excludeModal && (
        <Modal
          title={"Excluir convênio"}
          closeModal={() => setExcludeModal(false)}
          bodyContent={
            <>
              {/* <Input inputName={Tipo} name={"tipo"} register={register}/> */}
              <p>Você tem certeza que deseja Excluir este convênio?</p>
              <Button text={"Excluir"} onClick={async()=>{
                await deleteConvenio(currentId)
                await getConvenio()
                setExcludeModal(false)
              }} />
            </>
          }
        />
      )}
      {editModal && (
        <Modal
          title={"Editar convênio"}
          closeModal={() => setEditModal(false)}
          bodyContent={
            <form onSubmit={handleSubmit(async(data)=>{
                await updateConvenio(data, currentId)
                await getConvenio()
                setEditModal(false)
            })}>
              <Input
                inputName={"Tipo"}
                name={"tipo"}
                id="tipo"
                register={register}
              />
              <Button text={"Editar"} />
            </form>
          }
        />
      )}
    </>
  );
};

export default TableConvenios;
