import React, { useContext } from "react";
//interfaces
import { ITask } from "../../interfaces/Task";
import { Actions, ContainerTask, Content, Title, WithoutTask } from "./styles";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { LuTrash2 } from "react-icons/lu";
import { EditContext } from "../../context/editContext";
interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  const {setShowModal } = useContext(EditContext);
  const changeEdit = (task: ITask) => {
    setShowModal(true);
    handleEdit(task);
  };
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <ContainerTask key={task.id}>
            <Content>
              <Title>{task.title}</Title>
              <p>Dificuldade: {task.difficulty}</p>
            </Content>
            <Actions>
              <HiMiniPencilSquare onClick={() => changeEdit(task)} />
              <LuTrash2
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
            </Actions>
          </ContainerTask>
        ))
      ) : (
        <WithoutTask>Não há tarefas cadastradas</WithoutTask>
      )}
    </>
  );
};

export default TaskList;
