export interface Project {
    id: string;
    projectName: string;
    completed: boolean;
    isEditing: boolean;
  }

export interface ProjectFormProps {
    addProject: (projectName: string) => void;
}