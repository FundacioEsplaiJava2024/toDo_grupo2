import { TodoistApi } from "@doist/todoist-api-typescript";
import { Project, ToDoTask } from "./types";

const api: TodoistApi = new TodoistApi(
  "d05d7c0c8bd5c1324acff07211be5beecb98610a"
);

export const getApiProjects = async (): Promise<Project[]> => {
    const apiProjects = await api.getProjects();
    const newProjects: Project[] = await Promise.all(Object.values(apiProjects).map(async (project) => {
      const projectTasks: [ToDoTask[], ToDoTask[], ToDoTask[]] = await getProjectTasks(project.id);
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