import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { Project, ToDoTask } from "./types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoistApi } from "@doist/todoist-api-typescript";

function App() {
  const jiaToken: string = "41cff42f379ec3440dc13b7db401d8edd179a62b077a5a54125ab2e1599dd609";
  const api = new TodoistApi(jiaToken);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (projectName: string) => {
    const newProject: Project = {
      id: uuidv4(),
      projectName,
      isEditing: false,
      toDoTasks: [],
      doingTasks: [],
      doneTasks: [],
    };

    api.getProjects()
      .then((projects) => console.log(projects))
      .catch((error) => console.log(error));
  

    return [...projects, newProject];
  };

  const deleteProject = (id: string) => {
    const updatedProjects = projects.filter(project => project.id !== id);
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
      project.id === id ? { ...project, projectName, isEditing: false } : project
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

  const deleteTask = (taskId: string, projectId: string, taskStatus: string) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const tasksArray = project[taskStatus as keyof Project];
        if (Array.isArray(tasksArray)) {
          return {
            ...project,
            [taskStatus]: tasksArray.filter((task: ToDoTask) => task.id !== taskId),
          };
        }
      }
      return project;
    });
    return updatedProjects;
  };

  const changeTaskStatus = (task: ToDoTask, newStatus: string, oldStatus: string, projectId: string) => {
    const updatedProjects = projects.map((project) => {
      if (project.id === projectId) {
        const oldTasksArray = project[oldStatus as keyof Project];
        const newTasksArray = project[newStatus as keyof Project];
        if (Array.isArray(oldTasksArray) && Array.isArray(newTasksArray)) {
          return {
            ...project,
            [oldStatus]: oldTasksArray.filter((t: ToDoTask) => t.id !== task.id),
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

  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  return (
    <div className="app_container">
      <Sidebar
        projects={projects}
        addProject={(projectName) => setProjects(addProject(projectName))}
        deleteProject={(id) => setProjects(deleteProject(id))}
        startEditingProject={(id) => setProjects(startEditingProject(id))}
        editProjectName={(projectName, id) => setProjects(editProjectName(projectName, id))}
        onProjectSelect={handleProjectSelect}
      />
      {selectedProject && (
        <ToDoWrapper
          addTask={(taskName, taskStatus, projectId) => setProjects(addTask(taskName, taskStatus, projectId))}
          deleteTask={(taskId, projectId, taskStatus) => setProjects(deleteTask(taskId, projectId, taskStatus))}
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
