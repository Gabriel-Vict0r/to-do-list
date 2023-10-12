import React, { useState } from "react";
import { BgModal, ContainerModal, ModalContent } from "./style";
import { Subtitle } from "../../styles/global";
import { useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(true);
  const changeModal = () => {
    if (showModal === false) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <>
      {showModal && (
        <ContainerModal ref={modalRef}>
          <BgModal onClick={changeModal} />
          <ModalContent>
            <Subtitle>Editar Tarefa</Subtitle>
            <AiOutlineCloseCircle cursor="pointer" onClick={changeModal} />
            {children}
          </ModalContent>
        </ContainerModal>
      )}
    </>
  );
};

export default Modal;
