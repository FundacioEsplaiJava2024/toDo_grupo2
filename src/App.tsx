import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { Project, ToDoTask } from "./types/Index";
import { useState, useEffect } from "react";
import {
  getApiProjects,
  addApiProject,
  deleteApiProject,
} from "./Api/ToDoAPIManager";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    const newProjects = await getApiProjects();
    setProjects(newProjects);
    return newProjects;
  };

  useEffect(() => {
    getProjects();
  }, []);

  const addProject = async (projectName: string) => {
    await addApiProject(projectName);
    const updatedProjects = await getProjects();
    setProjects(updatedProjects);
  };

  const deleteproject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    deleteApiProject(id);
    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    }
  };

  const startEditingProject = (id: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, isEditing: true } : project
      )
    );
  };

  const editProjectName = (projectName: string, id: string) => {
    setProjects(
      projects.map((p) =>
        p.id === id ? { ...p, projectName, isEditing: false } : p
      )
    );
    updateApiProject(id, projectName);
  };

  const addTask = (taskName: string, taskStatus: string, projectId: string) => {
    const randId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    const newTask: ToDoTask = {
      id: randId.toString(),
      taskName,
      isEditing: false,
    };
    addApiTask(taskName, projectId, taskStatus);
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              toDoTasks:
                taskStatus === "toDoTasks"
                  ? [...p.toDoTasks, newTask]
                  : p.toDoTasks,
              doingTasks:
                taskStatus === "doingTasks"
                  ? [...p.doingTasks, newTask]
                  : p.doingTasks,
              doneTasks:
                taskStatus === "doneTasks"
                  ? [...p.doneTasks, newTask]
                  : p.doneTasks,
            }
          : p
      )
    );
    getProjects();
  };

  const deleteTask = (
    taskId: string,
    projectId: string,
    taskStatus: string
  ) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              toDoTasks:
                taskStatus === "toDoTasks"
                  ? p.toDoTasks.filter((task) => task.id !== taskId)
                  : p.toDoTasks,
              doingTasks:
                taskStatus === "doingTasks"
                  ? p.doingTasks.filter((task) => task.id !== taskId)
                  : p.doingTasks,
              doneTasks:
                taskStatus === "doneTasks"
                  ? p.doneTasks.filter((task) => task.id !== taskId)
                  : p.doneTasks,
            }
          : p
      )
    );
    deleteApiTask(taskId);
  };

  const changeTaskStatus = (
    task: ToDoTask,
    newStatus: string,
    oldStatus: string,
    projectId: string
  ) => {
    setProjects(
      projects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              toDoTasks:
                oldStatus === "toDoTasks"
                  ? p.toDoTasks.filter((t) => t.id !== task.id)
                  : newStatus === "toDoTasks"
                  ? [...p.toDoTasks, task]
                  : p.toDoTasks,
              doingTasks:
                oldStatus === "doingTasks"
                  ? p.doingTasks.filter((t) => t.id !== task.id)
                  : newStatus === "doingTasks"
                  ? [...p.doingTasks, task]
                  : p.doingTasks,
              doneTasks:
                oldStatus === "doneTasks"
                  ? p.doneTasks.filter((t) => t.id !== task.id)
                  : newStatus === "doneTasks"
                  ? [...p.doneTasks, task]
                  : p.doneTasks,
            }
          : p
      )
    );
    changeApiStatus(task.id, newStatus);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProjectId(project.id);
  };
  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <>
      <div className="app_container">
        <Sidebar
          projects={projects}
          addProject={addProject}
          deleteProject={deleteproject}
          startEditingProject={startEditingProject}
          editProjectName={editProjectName}
          onProjectSelect={handleProjectSelect}
        />{" "}
        {selectedProject && (
          <ToDoWrapper
            addTask={addTask}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
            project={selectedProject}
          />
        )}
      </div>
    </>
  );
}
export default App;
