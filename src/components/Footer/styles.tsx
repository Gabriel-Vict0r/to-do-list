import styled from "styled-components";
import { mixinsHF } from "../../utils/mixins";

export const Container = styled.footer`
  ${mixinsHF};
  justify-content: center;
`;
export const HighLight = styled.span`
    color: ${prop => prop.theme.colors.tirdy};
`