import { Project, ToDoTask } from "../types";
import { ToDoForm } from "./ToDoForm";

const ToDoColumn: React.FC<ToDoColumnProps> = ({
  title,
  status,
  addTask,
  deleteTask,
  changeTaskStatus,
  project,
}) => {
  let tasks: ToDoTask[] = [];
  if (status === "toDoTasks") {
    tasks = project.toDoTasks;
  } else if (status === "doingTasks") {
    tasks = project.doingTasks;
  } else if (status === "doneTasks") {
    tasks = project.doneTasks;
  }

  return (
    <>
      <div className="to_do_column_container">
        <h2 className="to_do_title">{title}</h2>
        <div className="column_style">
          {tasks.map((task) => (
            <p key={task.id}>{task.taskName}</p>
          ))}
          <ToDoForm id={project.id} addTask={addTask} taskStatus={status} />
        </div>
      </div>
    </>
  );
};

export default ToDoColumn;

export interface ToDoColumnProps {
  title: string;
  status: string;
  addTask: (taskName: string, taskStatus: string, id: string) => void;
  deleteTask: (taskId: string, projectId: string, taskStatus: string) => void;
  changeTaskStatus: (task: ToDoTask, newStatus: string, oldStatus: string, projectId: string) => void;
  project: Project;
}
