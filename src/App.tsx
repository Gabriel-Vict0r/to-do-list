//components
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import GlobalStyle, { Main, Subtitle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";
import usePersistedState from "./utils/usePersistState";
import { DefaultTheme } from "styled-components";
import TaskForm from "./components/Form";
import TaskList from "./components/TaskList";

//interface
import { ITask } from "./interfaces/Task";
function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  /** ATIVAR ESSE HOOOCK SÓ QUANDO FINALIZAR */
  // const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const [theme, setTheme] = useState(light);
  const togleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header togleTheme={togleTheme} />
        <Main>
          <Subtitle>O que você vai fazer?</Subtitle>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
          <div>
            <Subtitle>Suas tarefas</Subtitle>
            <TaskList />
          </div>
        </Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
