export interface Project {
    id: string;
    projectName: string;
    completed: boolean;
    isEditing: boolean;
  }

export interface ProjectFormProps {
    addProject: (projectName: string) => void;
}

export interface EditProjectFormProps {
    editProject: (projectName: string, id:string) => void;
    project: Project;
}

export interface ProjectComponentProps{
    key: string;
    project: Project;

    deleteproject: (id: string) => void;
    editproject: (id: string) => void;
}