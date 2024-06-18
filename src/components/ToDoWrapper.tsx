import { Project } from "../types";
import ToDoColumn from "./ToDoColumn";

export const ToDoWrapper: React.FC<ToDoWrapperProps> = ({ project, addTask }) => {
  return (
    <div>
      <h1>Proyecto: </h1>
      <h2>{project.projectName}</h2>
      <div className="column_container">
      <ToDoColumn key='1' project={project} addTask={addTask} title='TO DO 🎯' status='toDoTasks' />
      <ToDoColumn key='2' project={project} addTask={addTask} title='DOING 📓' status='doingTasks' />
      <ToDoColumn key='3' project={project} addTask={addTask} title='DONE ✔️' status='doneTasks' />
      </div>
    </div>
  );
};

interface ToDoWrapperProps {
  project: Project;
  addTask: (taskName: string, taskStatus: string, id:string) => void;
}
