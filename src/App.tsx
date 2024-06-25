import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { Project, ToDoTask } from "./types";
import {useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoistApi } from "@doist/todoist-api-typescript";
import { getApiProjects,deleteApiProject, addApiTask } from "./ApiManager";

function App() {

  //const jiaToken: string ="c0525743039cfaa82265235d7043ac1432b71b68";
  //const api = new TodoistApi(jiaToken);
  const [projects, setProjects] = useState<Project[]>([]);

//Para poder gettear los proyectos cuando carga la pagina. Cada vez que se renderiza algo ejecuta las funciones useEffect. Es decir, con cambios de estado, props nuevos, etc.
  useEffect(()=>{
    getProjects();
    console.log("useEfecteadoOk");
  }, [])

  const pauToken: string ="d05d7c0c8bd5c1324acff07211be5beecb98610a";
  const api = new TodoistApi(pauToken);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  

  const getProjects = async () => {
    const newProjects = await getApiProjects();
    console.log(newProjects)
    setProjects(newProjects); 
    return newProjects;
  };

  const addProject = async (projectName: string) => {
    try {
      await api.addProject({ name: projectName });
      const updatedProjects = await getProjects();
      setProjects(updatedProjects);
    } catch (error) {
      console.error(error);
    }
    // api.getProjects()
    //   .then((projects) => console.log(projects))
    //   .catch((error) => console.log(error));
    //return [...projects, newProject];
  };

  const deleteProject = (id: string) => {
    deleteApiProject(id);
    const updatedProjects = projects.filter((project) => project.id !== id);
    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    }
    return updatedProjects;
  };

  const startEditingProject = (id: string) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, isEditing: true } : project
    );
    return updatedProjects;
  };

  const editProjectName = (projectName: string, id: string) => {
    const updatedProjects = projects.map((project) =>
      project.id === id
        ? { ...project, projectName, isEditing: false }
        : project
    );
    return updatedProjects;
  };

  const addTask = (taskName: string, taskStatus: string, projectId: string) => {
    const newTask: ToDoTask = {
      id: uuidv4(),
      taskName,
      isEditing: false,
    };
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        addApiTask(taskName,projectId,taskStatus)
        const tasksArray = project[taskStatus as keyof Project];
        if (Array.isArray(tasksArray)) {
          return {
            ...project,
            [taskStatus]: [...tasksArray, newTask],
          };
        }
      }
      return project;
    });
    return updatedProjects;
  };

  const deleteTask = (
    taskId: string,
    projectId: string,
    taskStatus: string
  ) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const tasksArray = project[taskStatus as keyof Project];
        if (Array.isArray(tasksArray)) {
          return {
            ...project,
            [taskStatus]: tasksArray.filter(
              (task: ToDoTask) => task.id !== taskId
            ),
          };
        }
      }
      return project;
    });
    return updatedProjects;
  };

  const changeTaskStatus = (
    task: ToDoTask,
    newStatus: string,
    oldStatus: string,
    projectId: string
  ) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const oldTasksArray = project[oldStatus as keyof Project];
        const newTasksArray = project[newStatus as keyof Project];
        if (Array.isArray(oldTasksArray) && Array.isArray(newTasksArray)) {
          return {
            ...project,
            [oldStatus]: oldTasksArray.filter(
              (t: ToDoTask) => t.id !== task.id
            ),
            [newStatus]: [...newTasksArray, task],
          };
        }
      }
      return project;
    });
    return updatedProjects;
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProjectId(project.id);
  };

  let selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );


  return (
    <div className="app_container">
      <Sidebar
        projects={projects}
        addProject={addProject}
        deleteProject={(id) => setProjects(deleteProject(id))}
        startEditingProject={(id) => setProjects(startEditingProject(id))}
        editProjectName={(projectName, id) => setProjects(editProjectName(projectName, id))}
        onProjectSelect={handleProjectSelect}
      />
      {selectedProject && (
        <ToDoWrapper
          addTask={(taskName, taskStatus, projectId) =>
            setProjects(addTask(taskName, taskStatus, projectId))
          }
          deleteTask={(taskId, projectId, taskStatus) =>
            setProjects(deleteTask(taskId, projectId, taskStatus))
          }
          changeTaskStatus={(task, newStatus, oldStatus, projectId) =>
            setProjects(changeTaskStatus(task, newStatus, oldStatus, projectId))
          }
          project={selectedProject}
        />
      )}
    </div>
  );
}

export default App;


