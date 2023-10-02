import styled from "styled-components";
export const Container = styled.header`
  height: 60px;
  background-color: ${(prop) => prop.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
