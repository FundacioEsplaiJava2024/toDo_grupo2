import { TodoistApi } from "@doist/todoist-api-typescript";
import { Project, ToDoTask, ApiTask } from "./types";

const api: TodoistApi = new TodoistApi(
  "d05d7c0c8bd5c1324acff07211be5beecb98610a"
);

export function deleteApiProject(id: string) {
  api.deleteProject(id);
}

export function deleteApiTask(id: string) {
  api.deleteTask(id);
}


export const getApiProjects = async (): Promise<Project[]> => {
  const apiProjects = await api.getProjects();
  const newProjects: Project[] = await Promise.all(Object.values(apiProjects).map(async (project) => {
    const projectTasks: [ApiTask[], ApiTask[], ApiTask[]] = await getProjectTasks(project.id);
    return {
      id: project.id,
      projectName: project.name,
      isEditing: false,
      toDoTasks: projectTasks[0],
      doingTasks: projectTasks[1],
      doneTasks: projectTasks[2],
    };
  }));
  return newProjects;
};

export const addApiTask = (
  taskName: string,
  projectId: string,
  description: string
) => {
  api.addTask({
    content: taskName,
    projectId: projectId,
    description: description,
  });
};

export const getAPITasks = async (projectId: string) => {
  const allTasks = await api.getTasks({ projectId: projectId });
  const convertedTasks: ApiTask[] = Object.values(allTasks).map((task) => {
    return {
      id: task.id,
      content: task.content,
      description: task.description
    };
  });
  return convertedTasks;
};

export const getProjectTasks = async (projectId: string): Promise<[ToDoTask[], ToDoTask[], ToDoTask[]]> => {
  const indexedTasks: [ToDoTask[], ToDoTask[], ToDoTask[]] = [[], [], []];
  const convertedTasks = await getAPITasks(projectId);

  convertedTasks.forEach(task => {
    const convertedTask = convertTask(task);
    switch (task.description) {
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

const convertTask = (apiTask: ApiTask) => {
  const newTask: ToDoTask = {
    id: apiTask.id,
    taskName: apiTask.content,
    isEditing: false,
  };
  return newTask
}


export const changeApiStatus = (taskId:string,newStatus:string,) => {

  api.updateTask(taskId, { description: newStatus});

}