import styled from "styled-components";
import calc from "../../utils/calcFontSize";

export const Form = styled.form`
  margin: 0.5em auto;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 0.8em;
  background-color: ${(prop) => prop.theme.colors.forms.backround};
  padding: 2em;
  border-radius: 5px;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8em;
`;
export const Label = styled.label`
  font-family: ${(prop) => prop.theme.fonts.primary};
  font-weight: 700;
  font-size: ${(prop) => prop.theme.fonts.sizeSecondary};
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
`;
export const Submit = styled.input`
  border: 1px solid ${(prop) => prop.theme.colors.secondary};
  border-radius: 7px;
  padding: 0.5em;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  margin-top: 10px;
  &:hover {
    background-color: ${(prop) => prop.theme.colors.secondary};
    color: ${(prop) => prop.theme.colors.background};
  }
`;
