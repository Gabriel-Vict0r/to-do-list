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
export const mixinsContainers = css`
  margin: 0.5em auto;
  display: flex;
  max-width: 400px;
  gap: 0.8em;
  background-color: ${(prop) => prop.theme.colors.forms.backround};
  padding: 2em;
  border-radius: 5px;
`
export const mixinsTitles = css`
  font-family: ${(prop) => prop.theme.fonts.primary};
  font-weight: 700;
  font-size: ${(prop) => prop.theme.fonts.sizeSecondary};
  color: ${prop => prop.theme.colors.text};
`