import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
//interface
import { ITask } from "../../interfaces/Task";

//Components
import { ContainerInput, Form, Input, Label, Submit } from "./style";
interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}
const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);
  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    console.log(taskList);
    setTitle("");
    setDifficulty(0);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };
  return (
    <Form onSubmit={addTaskHandler}>
      <ContainerInput>
        <Label htmlFor="title">Título </Label>
        <Input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor="difficulty">Dificuldade </Label>
        <Input
          type="text"
          name="title"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </ContainerInput>
      <Submit type="submit" value={btnText} />
    </Form>
  );
};

export default TaskForm;
