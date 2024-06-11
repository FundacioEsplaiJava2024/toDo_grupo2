import React from 'react'
import { ProjectForm } from './ProjectForm'
import { useState } from 'react'
import { Project } from '../types/index.tsx'
import { v4 as uuidv4 } from "uuid";
import { ProjectComponent } from './ProjectComponent.tsx';
import { EditProjectForm } from './EditProjectForm.tsx';
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

  const deleteproject = (id: string) => {

    setProjects(projects.filter(project => project.id !== id))

  }

  const editproject = (id: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, isEditing: !project.isEditing } : project
      )
    );
  };

  const editProjectName = (projectName: string, id: string) => {
    setProjects(
      projects.map((p) =>
        p.id === id? {...p, projectName, isEditing:!p.isEditing } : p
      )
    );
  };

  return (
    <>
      <section className="Sidebar">
        <h1>Logo</h1>
        <h3>Proyectos</h3>
        <ProjectForm addProject={addProject} />
        <div className='pepe'>
        {projects.map((project) => (
          project.isEditing ? (
            <EditProjectForm key={project.id} editProject={editProjectName} project={project} />
          ) : (
            <ProjectComponent key={project.id} project={project} editproject={editproject} deleteproject={deleteproject} />
          )
        ))}
        </div>
      </section>
    </>
  )
}
