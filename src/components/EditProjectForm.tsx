import React, {FormEvent, useState} from 'react'
import { EditProjectFormProps } from '../types'



export const EditProjectForm: React.FC<EditProjectFormProps> = ({editProject, project}) => {
  //React.FC especifica el tipado de los atributos que recibe la función 
    const [value,setValue] = useState(project.projectName);

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
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
