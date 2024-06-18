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
        {selectedProject && <ToDoWrapper project={selectedProject} />}
      </div>
    </>
  );
}
export default App;
