import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { Project, ToDoTask } from "./types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (projectName: string) => {
    const newProject: Project = {
      id: uuidv4(),
      projectName,
      isEditing: false,
      toDoTasks: [] as ToDoTask[],
      doingTasks: [] as ToDoTask[],
      doneTasks: [] as ToDoTask[],
    };
    setProjects([...projects, newProject]);
  };

  const deleteproject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
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
  };

  const addTask = (taskName: string, status: string, id: string) => {
    const newTask: ToDoTask = {
      id: uuidv4(),
      taskName,
      isEditing: false,
    };
    setProjects(
      projects.map((p) =>
        p.id === id
          ? {
              ...p,
              toDoTasks:
                status === "toDoTasks"
                  ? [...p.toDoTasks, newTask]
                  : p.toDoTasks,
              doingTasks:
                status === "doingTasks"
                  ? [...p.doingTasks, newTask]
                  : p.doingTasks,
              doneTasks:
                status === "doneTasks"
                  ? [...p.doneTasks, newTask]
                  : p.doneTasks,
            }
          : p
      )
    );
    console.log(projects)
  };

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
        {selectedProject && <ToDoWrapper addTask={addTask} project={selectedProject} />}
      </div>
    </>
  );
}
export default App;
