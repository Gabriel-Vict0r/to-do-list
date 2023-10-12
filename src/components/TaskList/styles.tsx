import styled from "styled-components";
import { mixinsContainers, mixinsTitles } from "../../utils/mixins";

export const ContainerTask = styled.div`
  flex-direction: row;
  ${mixinsContainers};
  /* padding-bottom: 0; */
  box-shadow: 4px 7px 23px -11px rgba(201, 201, 201, 1);
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 70%;
`;
export const Actions = styled(Content)`
  width: 30%;
  align-items: flex-end;

  & svg {
    font-weight: 200;
    width: 40%;
    height: 40%;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  & svg:hover {
    background-color: ${(prop) => prop.theme.colors.secondary};
    color: white;
  }
  & svg:nth-child(2):hover {
    background-color: ${(prop) => prop.theme.colors.primary};
    color: white;
  }
`;
export const Title = styled.h4`
  ${mixinsTitles};
`;
