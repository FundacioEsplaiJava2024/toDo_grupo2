import { Project } from "../types";

export const ToDoWrapper: React.FC<ToDoWrapperProps> = ({ project }) => {
  return (
    <>
      <div className="toDoWrapper">
        <h1>Proyecto: </h1>
        <h2>{project.projectName}</h2>
      </div>
    </>
  );
};

interface ToDoWrapperProps {
  project: Project;
}
