import React, { useContext, useState, useEffect } from "react";
import { DefaultTheme } from "styled-components";
import { Container, Tittle } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

interface Props {
  togleTheme(): void;
}
const Header = ({ togleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(title === "light" ? false : true);
  }, [title]);
  return (
    <Container>
      <Tittle>TaskDo</Tittle>
      <Switch
        onChange={togleTheme}
        checked={checked}
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
