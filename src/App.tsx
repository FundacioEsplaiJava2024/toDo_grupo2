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
      <Sidebar onProjectSelect={handleProjectSelect} />
      {selectedProject && <ToDoWrapper project={selectedProject} />} 
    </>
  );
}

export default App;
