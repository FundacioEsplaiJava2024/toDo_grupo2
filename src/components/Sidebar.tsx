import { ProjectForm } from "./ProjectForm";
import { useState } from "react";
import { Project, ToDoTask } from "../types/index.tsx";
import { v4 as uuidv4 } from "uuid";
import { ProjectComponent } from "./ProjectComponent.tsx";
import { EditProjectForm } from "./EditProjectForm.tsx";

export const Sidebar: React.FC<SidebarProps> = ({
  projects,
  addProject,
  deleteProject,
  startEditingProject,
  editProjectName,
  onProjectSelect,
}) => {
  return (
    <>
      <section className="Sidebar">
        <div className="sidebar_text">
          <h1>Logo</h1>
          <h3>Proyectos</h3>
        </div>
        <ProjectForm addProject={addProject} />
        <div className="projectWrapper">
          {projects.map((project) =>
            project.isEditing ? (
              <EditProjectForm
                key={project.id}
                editProject={editProjectName}
                project={project}
              />
            ) : (
              <ProjectComponent
                key={project.id}
                project={project}
                editproject={startEditingProject}
                deleteproject={deleteProject}
                onClick={() => onProjectSelect(project)}
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

interface SidebarProps {
  projects: Project[];
  addProject: (projectName: string) => void;
  deleteProject: (id: string) => void;
  startEditingProject: (id: string) => void;
  editProjectName: (projectName: string, id: string) => void;
  onProjectSelect: (project: Project) => void;
}
