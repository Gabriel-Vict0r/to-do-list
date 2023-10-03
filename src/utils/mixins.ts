//mixins for the container that will wrapper Header and Footer
import { css } from 'styled-components';
export const mixinsHF = css`
  height: 90px;
  background-color: ${(prop: any) => prop.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;