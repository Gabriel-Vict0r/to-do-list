import React from "react";
import { ContainerInput, Form, Input, Label, Submit } from "./style";
interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
    <Form>
      <ContainerInput>
        <Label htmlFor="title">Título </Label>
        <Input type="text" name="title" placeholder="Título da tarefa" />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor="difficulty">Dificuldade </Label>
        <Input type="text" name="title" placeholder="Dificuldade da tarefa" />
      </ContainerInput>
      <Submit type="submit" value={btnText} />
    </Form>
  );
};

export default TaskForm;
