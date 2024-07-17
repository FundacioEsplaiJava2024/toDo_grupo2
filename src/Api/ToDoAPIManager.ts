import ToDoAPI from "./ToDoAPI";
import { Project, ToDoTask, ToDoApiTask } from "../types/Index";

export const getApiProjects = async (): Promise<Project[]> => {
  const apiProjects = await ToDoAPI.get("/projects");
  const newProjects: Project[] = await Promise.all(
    Object.values(apiProjects.data).map(async (project: any) => {
      const projectTasks: [ToDoTask[], ToDoTask[], ToDoTask[]] =
        await getProjectTasks(project.tasks);
      return {
        id: project.id,
        projectName: project.projectName,
        isEditing: false,
        toDoTasks: projectTasks[0],
        doingTasks: projectTasks[1],
        doneTasks: projectTasks[2],
      };
    })
  );
  return newProjects;
};

export const getProjectTasks = async (
  tasks: ToDoApiTask[]
): Promise<[ToDoTask[], ToDoTask[], ToDoTask[]]> => {
  const indexedTasks: [ToDoTask[], ToDoTask[], ToDoTask[]] = [[], [], []];

  tasks.forEach((task) => {
    const convertedTask = convertTask(task);
    switch (task.status) {
      case "toDoTasks":
        indexedTasks[0].push(convertedTask);
        break;
      case "doingTasks":
        indexedTasks[1].push(convertedTask);
        break;
      case "doneTasks":
        indexedTasks[2].push(convertedTask);
        break;
      default:
        break;
    }
  });

  return indexedTasks;
};

const convertTask = (apiTask: ToDoApiTask) => {
  const newTask: ToDoTask = {
    id: apiTask.id,
    taskName: apiTask.name,
    isEditing: false,
  };
  return newTask;
};
