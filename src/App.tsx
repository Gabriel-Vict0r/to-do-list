//components
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import GlobalStyle, { Main } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistState";
import { DefaultTheme } from "styled-components";
function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const togleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  console.log(theme.title);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header togleTheme={togleTheme} />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
