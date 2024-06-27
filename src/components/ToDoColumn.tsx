import {faTrash,faBullseye,faExclamation,faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project, ToDoTask } from "../types/Index";
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
            <div className="task">
              <p key={task.id} className="projectName">{task.taskName}</p>
              <div className='icon_wrapper'>
                      {status !== "toDoTasks" && ( 
                        // es como un if(status != "toDoTasks"){} Si el estado es distinto a esta columna, lo carga, si coincide no lo muestra
                        <FontAwesomeIcon icon={faBullseye} onClick={() => changeTaskStatus(task, "toDoTasks", status, project.id)} className='faIcon' id="faBullseye" />
                      )}
                      {status !== "doingTasks" && (
                        <FontAwesomeIcon icon={faExclamation} onClick={() => changeTaskStatus(task, "doingTasks", status, project.id)} className='faIcon' id="faExclamation" />
                      )}
                      {status !== "doneTasks" && (
                        <FontAwesomeIcon icon={faCheck} onClick={() => changeTaskStatus(task, "doneTasks", status, project.id)} className='faIcon' id="faCheck" />
                      )}
                      <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id, project.id, status)} className='faIcon' id="trashIcon" />
                    </div>
            </div>
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
