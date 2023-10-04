import styled from "styled-components";
import { mixinsHF } from "../../utils/mixins";

export const Container = styled.footer`
  ${mixinsHF};
  justify-content: center;
`;
export const HighLight = styled.span`
  color: ${(prop) => prop.theme.colors.tirdy};
`;
export const Text = styled.p`
  font-family: ${(prop) => prop.theme.fonts.primary};
  font-size: ${(prop) => prop.theme.fonts.sizeSecondary};
  font-weight: 700;
`;