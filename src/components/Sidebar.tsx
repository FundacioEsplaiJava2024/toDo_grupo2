import React from 'react'
import { ProjectForm } from './ProjectForm'
import { useState } from 'react'
import { Project } from '../types/index.tsx'
import { v4 as uuidv4 } from "uuid";
import { ProjectComponent } from './ProjectComponent.tsx';
uuidv4();


export const Sidebar = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = (projectName: string) => {
    const newProject: Project = {
      id: uuidv4(),
      projectName,
      completed: false,
      isEditing: false
    };
    setProjects([...projects, newProject]);
  };

  return (
    <>
    <section className="Sidebar">
            <h1>Logo</h1>
            <h3>Proyectos</h3>
            <ProjectForm addProject={addProject}/>
            {projects.map((project,index) => (
              <ProjectComponent key={project.id} project={project} />
            ))}
    </section>
    </>
  )
}
