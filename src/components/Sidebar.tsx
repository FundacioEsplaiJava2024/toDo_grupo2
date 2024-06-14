import { ProjectForm } from './ProjectForm'
import { useState } from 'react'
import { Project } from '../types/index.tsx'
import { v4 as uuidv4 } from "uuid";
import { ProjectComponent } from './ProjectComponent.tsx';
import { EditProjectForm } from './EditProjectForm.tsx';


export const Sidebar: React.FC<SidebarProps> = ({ onProjectSelect }) => {

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
        p.id === id? {...p, projectName, isEditing: false } : p
      )
    );
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
          project.isEditing ? (
            <EditProjectForm key={project.id} editProject={editProjectName} project={project} />
          ) : (
            <ProjectComponent key={project.id} project={project} editproject={startEditingProject} deleteproject={deleteproject} />
          )
        ))}
        </div>
      </section>
    </>
  )
}

interface SidebarProps {
  onProjectSelect: (project: Project) => void;
}