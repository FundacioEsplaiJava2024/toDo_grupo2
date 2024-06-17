import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ToDoWrapper } from "./components/ToDoWrapper";
import { Project } from "./types";
import { useState } from "react";

function App() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <>
    <div className="app_container">
      <Sidebar onProjectSelect={handleProjectSelect} />
      {selectedProject && <ToDoWrapper project={selectedProject} />}
      </div>
    </>
  );
}
export default App;
