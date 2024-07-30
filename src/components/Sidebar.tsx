import { ProjectForm } from "./ProjectForm";
import { Project } from "../types/index.tsx";
import { ProjectComponent } from "./ProjectComponent.tsx";
import { EditProjectForm } from "./EditProjectForm.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Sidebar: React.FC<SidebarProps> = ({
  projects,
  addProject,
  deleteProject,
  startEditingProject,
  editProjectName,
  onProjectSelect,
  handleLogout
}) => {
  return (
    <>
      <section className="Sidebar">
        <div className="sidebar_text">
          <h1>Proyectos</h1>
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
        <div className="Project" id="logout" >
          <p className="projectName" onClick={handleLogout}>
            Logout
          </p>
          <div className="icon_wrapper">
            <FontAwesomeIcon icon={faRightFromBracket} className='faIcon' id="faRightFromBracket"/>
          </div>
        </div>{" "}
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
  handleLogout: () => void;
}
