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
import Modal from "./components/Modal";
import { AuthProvider } from "./context/editContext";
function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  /** ATIVAR ESSE HOOOCK SÓ QUANDO FINALIZAR */
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  // const [theme, setTheme] = useState(dark);
  const togleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleEdit = (task: ITask): void => {
    setTaskToUpdate(task);
  };
  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(updatedItems);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <AuthProvider>
          <Modal
            children={
              <TaskForm
                btnText="Editar Tarefa"
                taskList={taskList}
                task={taskToUpdate}
                handleUpdate={updateTask}
              />
            }
          />
          <Header togleTheme={togleTheme} />
          <Main>
            <Subtitle>O que você vai fazer?</Subtitle>
            <TaskForm
              btnText="Criar Tarefa"
              taskList={taskList}
              setTaskList={setTaskList}
            />
            <div>
              <Subtitle>Suas tarefas</Subtitle>
              <TaskList
                taskList={taskList}
                handleDelete={deleteTask}
                handleEdit={handleEdit}
              />
            </div>
          </Main>
        </AuthProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
