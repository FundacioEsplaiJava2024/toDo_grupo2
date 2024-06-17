import { Project } from "../types";
import ToDoColumn from "./ToDoColumn";

export const ToDoWrapper: React.FC<ToDoWrapperProps> = ({ project, addTask }) => {
  return (
    <div>
      <h1>Proyecto: </h1>
      <h2>{project.projectName}</h2>
      <ToDoColumn project={project} addTask={addTask} title='TO DO 🎯' status='toDoTasks' />
      <ToDoColumn project={project} addTask={addTask} title='DOING 📓' status='doingTasks' />
      <ToDoColumn project={project} addTask={addTask} title='DONE ✔️' status='doneTasks' />
    </div>
  );
};

interface ToDoWrapperProps {
  project: Project;
  addTask: (taskName: string, taskStatus: string, id:string) => void;
}
