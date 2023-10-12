import React, { useContext } from "react";
import { BgModal, ContainerModal, ModalContent } from "./style";
import { Subtitle } from "../../styles/global";
import { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { EditContext } from "../../context/editContext";
interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const modalRef = useRef(null);
  const { showModal, setShowModal } = useContext(EditContext);
  // const changeModal = () => {
  //   if (showModal === false) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };
  return (
    <>
      {showModal && (
        <ContainerModal ref={modalRef}>
          <BgModal onClick={() => setShowModal(false)} />
          <ModalContent>
            <Subtitle>Editar Tarefa</Subtitle>
            <AiOutlineCloseCircle
              cursor="pointer"
              onClick={() => setShowModal(false)}
            />
            {children}
          </ModalContent>
        </ContainerModal>
      )}
    </>
  );
};

export default Modal;