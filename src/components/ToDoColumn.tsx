import { Project, ToDoTask } from "../types";
import { ToDoForm } from "./ToDoForm";

const ToDoColumn: React.FC<ToDoColumnProps> = ({
  title,
  status,
  addTask,
  project,
}) => {

  const tasks = project[status as keyof Project] as ToDoTask[];
  return (
    <>
      <div className="to_do_column_container">
        <h2 className="to_do_title">{title}</h2>
        <div className="column_style">
          {tasks.map((task) => (
            <p>{task.taskName}</p>
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
  project: Project;
}
