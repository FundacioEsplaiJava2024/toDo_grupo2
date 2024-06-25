import { TodoistApi } from "@doist/todoist-api-typescript";
import { Project, ToDoTask } from "./types";


const api: TodoistApi = new TodoistApi('d05d7c0c8bd5c1324acff07211be5beecb98610a');

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
    return newProjects;
  };


export const addApiTask = (taskName:string, projectId:string) =>{
  api.addTask({ content:taskName, projectId: projectId })
}