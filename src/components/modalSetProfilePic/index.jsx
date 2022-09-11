import Modal from "../modal";
import Button from "../submitButton";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import Loader from "../loader";
import { useUsuarios } from "../../providers/usuarios";
import { FaTrash } from "react-icons/fa";

const ModalSetProfilePic = ({ setOpenModalPhoto }) => {
  const {
    userData,
    generateUrl,
    getProfile,
    currentImageSelected,
    setCurrentImage,
    updateProfileImage,
  } = useUsuarios();

  const onDrop = useCallback(async (acceptedFiles) => {
    setLoadingImage(true);
    await generateUrl(acceptedFiles[0]);
    setLoadingImage(false);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [disabled, setDisabled] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  return (
    <Modal
      title={"Adicionar foto de perfil"}
      closeModal={() => setOpenModalPhoto(false)}
      bodyContent={
        <>
          <div className="drop-zone" {...getRootProps()}>
            {currentImageSelected ? (
              <>
                <FaTrash onClick={() => setCurrentImage("")} />
                <img src={currentImageSelected} alt="Imagem selecionada" />
              </>
            ) : (
              <>
                <input {...getInputProps()} />
                {loadingImage ? (
                  <Loader />
                ) : isDragActive ? (
                  <p>Solte a foto aqui ...</p>
                ) : (
                  <p>
                    Arraste e solte uma foto aqui, ou click para selecionar uma
                    foto
                  </p>
                )}
              </>
            )}
          </div>

          <Button
            text={"Adicionar"}
            disabled={disabled}
            onClick={async () => {
              setDisabled(true);
              if (!currentImageSelected) toast.error("Adicione alguma imagem");
              await updateProfileImage(userData.id, {
                foto_perfil: currentImageSelected,
              });
              await getProfile();
              setDisabled(false);
              setOpenModalPhoto(false);
              setCurrentImage("")
            }}
          />
        </>
      }
    />
  );
};

export default ModalSetProfilePic;
