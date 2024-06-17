import { Project } from "../types";
import ToDoColumn from "./ToDoColumn";

export const ToDoWrapper: React.FC<ToDoWrapperProps> = ({ project }) => {
  return (
    <div>
      <h1>Proyecto: </h1>
      <h2>{project.projectName}</h2>
      <ToDoColumn />
    </div>
  );
};

interface ToDoWrapperProps {
  project: Project;
}
