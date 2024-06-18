import { Project } from "../types";
import ToDoColumn from "./ToDoColumn";

export const ToDoWrapper: React.FC<ToDoWrapperProps> = ({ project, addTask, deleteTask }) => {
  return (
    <div>
      <h1>Proyecto: </h1>
      <h2>{project.projectName}</h2>
      <div className="column_container">
      <ToDoColumn key='1' project={project} addTask={addTask} deleteTask={deleteTask} title='TO DO 🎯' status='toDoTasks' />
      <ToDoColumn key='2' project={project} addTask={addTask} deleteTask={deleteTask} title='DOING 📓' status='doingTasks' />
      <ToDoColumn key='3' project={project} addTask={addTask} deleteTask={deleteTask} title='DONE ✔️' status='doneTasks' />
      </div>
    </div>
  );
};

interface ToDoWrapperProps {
  project: Project;
  addTask: (taskName: string, taskStatus: string, id:string) => void;
  deleteTask: (taskId: string, projectId: string, taskStatus: string) => void;
}
