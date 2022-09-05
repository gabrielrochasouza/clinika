import { ModalContainer } from "./style";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ title, bodyContent, closeModal, ...rest }) => {
  return (
    <ModalContainer
      {...rest}
      id="modal-bg"
      onClick={(e) =>
        e.target.id === "modal-bg" && closeModal()
      }
    >
      <div id="modal-box" className="modal-box">
        <div className="modal-header">
          <span className="title">{title}</span>
          <span onClick={closeModal}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="modal-body">{bodyContent}</div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
