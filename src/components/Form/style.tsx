import styled from "styled-components";
import calc from "../../utils/calcFontSize";
import { mixinsContainers, mixinsTitles } from "../../utils/mixins";

export const Form = styled.form`
  flex-direction: column;
  ${mixinsContainers};
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8em;
`;
export const Label = styled.label`
  ${mixinsTitles};
`;
export const Input = styled.input`
  width: 100%;
  height: 2em;
  padding: 1em;
  border-radius: 7px;
  border: 1px solid transparent;
  outline: none;
  font-size: ${calc(16)};
  background-color: ${(prop) => prop.theme.colors.forms.secondGray};
  &:focus {
    border: 1px solid ${(prop) => prop.theme.colors.forms.tirdyGray};
  }
  color: ${(prop) => prop.theme.colors.text};
`;
export const Submit = styled.input`
  border: 1px solid ${(prop) => prop.theme.colors.secondary};
  border-radius: 7px;
  padding: 0.5em;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  margin-top: 10px;
  color: ${(prop) => prop.theme.colors.text};
  &:hover {
    background-color: ${(prop) => prop.theme.colors.secondary};
    color: ${(prop) => prop.theme.colors.background};
  }
`;
