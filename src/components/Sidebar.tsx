import { useState } from 'react'
import { Project } from '../types/index.tsx'
import { ProjectForm } from './ProjectForm'
import { ProjectComponent } from './ProjectComponent.tsx';
import { v4 as uuidv4 } from "uuid";

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
      <div className="sidebar_text">
      <h1>Logo</h1>
      <h3>Proyectos</h3>
      </div>
      <ProjectForm addProject={addProject} />
      <div className='projectWrapper'>
      {projects.map((project) => (
          <ProjectComponent key={project.id} project={project} editproject={editproject} deleteproject={deleteproject} />
      ))}
      </div>
    </section>
  </>
  )
}