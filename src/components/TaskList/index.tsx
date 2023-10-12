import React from "react";
//interfaces
import { ITask } from "../../interfaces/Task";
import { Actions, ContainerTask, Content, Title } from "./styles";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { AiFillDelete } from "react-icons/ai";
import { LuTrash2 } from "react-icons/lu";
interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
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
              <HiMiniPencilSquare onClick={() => handleEdit(task)} />
              <LuTrash2
                onClick={() => {
                  handleDelete(task.id);
                }}
              />
            </Actions>
          </ContainerTask>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
