import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
export const BgModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: black;
  opacity: 0.3;
  width: 100%;
  height: 100%;
`;
export const ModalContent = styled.div`
  background-color: ${(prop) => prop.theme.colors.forms.backround};
  width: 500px;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1em;
  text-align: center;
  padding-top: 2em;
  position: relative;
  & svg {
    position: absolute;
    right: 10px;
    top: 10px;
    color: ${(prop) => prop.theme.colors.primary};
    width: 30px;
    height: 30px;
  }
`;
