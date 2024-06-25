import { TodoistApi } from "@doist/todoist-api-typescript";
import { Project, ToDoTask } from "./types";


let pauToken: string = 'd05d7c0c1324acff07211be5beecb98610a';
let api: TodoistApi = new TodoistApi(pauToken);

export function deleteApiProject(id: string) {
  api.deleteProject(id);
}


export const getApiProjects = async () => {
    const apiProjects = await api.getProjects();
    const newProjects: Project[] = Object.values(apiProjects).map((project) => {
      return {
        id: project.id,
        projectName: project.name,
        isEditing: false,
        toDoTasks: [] as ToDoTask[],
        doingTasks: [] as ToDoTask[],
        doneTasks: [] as ToDoTask[],
      };

    });
    console.log('pepe')
    return newProjects;
  };
