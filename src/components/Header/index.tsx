import React, { useContext, useState } from "react";
import { DefaultTheme } from "styled-components";
import { Container } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  togleTheme(): void;
}
const Header = ({ togleTheme }: Props) => {
  const { colors, title } = useContext<DefaultTheme>(ThemeContext);

  return (
    <Container>
      <h1>React + TS To-do</h1>
      <Switch
        onChange={togleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.3, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};

export default Header;
