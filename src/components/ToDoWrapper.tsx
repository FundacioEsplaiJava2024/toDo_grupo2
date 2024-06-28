import { Project, ToDoTask } from "../types/Index";
import ToDoColumn from "./ToDoColumn";

export const ToDoWrapper: React.FC<ToDoWrapperProps> = ({ project, addTask, deleteTask, changeTaskStatus }) => {
  return (
    <div>
      <h2>{project.projectName} : </h2>
      <div className="column_container">
      <ToDoColumn key='1' project={project} addTask={addTask} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} title='TO DO 🎯' status='toDoTasks' />
      <ToDoColumn key='2' project={project} addTask={addTask} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} title='DOING ❗' status='doingTasks' />
      <ToDoColumn key='3' project={project} addTask={addTask} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} title='DONE ✔️' status='doneTasks' />
      </div>
    </div>
  );
};

interface ToDoWrapperProps {
  project: Project;
  addTask: (taskName: string, taskStatus: string, id:string) => void;
  deleteTask: (taskId: string, projectId: string, taskStatus: string) => void;
  changeTaskStatus: (task: ToDoTask, newStatus: string, oldStatus: string, projectId: string) => void;
}
