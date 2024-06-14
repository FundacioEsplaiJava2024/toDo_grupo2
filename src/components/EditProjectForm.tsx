import React, {FormEvent, useState} from 'react'
import { Project } from '../types';


export const EditProjectForm: React.FC<EditProjectFormProps> = ({editProject, project}: EditProjectFormProps) => {
  //React.FC especifica el tipado de los atributos que recibe la función 
    const [value,setValue] = useState(project.projectName);

    const handleSubmit = (e : FormEvent) => {
      e.preventDefault();
      if (value.length < 1 || value.length > 16) {
        alert("Enter a name between 1 and 16 characters");
        return;
      }
        editProject(value, project.id);
        setValue("");
    }

    return (
      <form action="" className="project_form" onSubmit={handleSubmit}>
          <input type="text" className='project_input' id='project_edit_input' placeholder="Update project?" 
          onChange= {(e) => setValue(e.target.value)} value={value} />
          <button  type="submit" className="project_button">Update</button>
          
      </form>
    )
}
export interface EditProjectFormProps {
  editProject: (projectName: string, id:string) => void;
  project: Project;
}