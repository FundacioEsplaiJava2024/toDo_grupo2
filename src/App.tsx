import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { Project, ToDoTask } from "./types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
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
    setProjects(projects.filter(project => project.id !== id));
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
  };

  const addTask = (taskName: string, taskStatus: string, projectId: string) => {
    const newTask: ToDoTask = {
      id: uuidv4(),
      taskName,
      isEditing: false,
    };
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
  };



  const handleProjectSelect = (project: Project) => {
    setSelectedProjectId(project.id);
  };
  const selectedProject = projects.find(p => p.id === selectedProjectId);

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
