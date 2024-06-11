import React, {FormEvent, useState} from 'react'
import { ProjectFormProps } from '../types'


export const ProjectForm: React.FC<ProjectFormProps> = ({ addProject }) => {
  //React.FC especifica el tipado de los atributos que recibe la función 
    const [value,setValue] = useState("")

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        if(value.length < 1 || value.length >12){
          return;
        }
        addProject(value);
        setValue("");
    }

    return (
      <form action="" className="project_form" onSubmit={handleSubmit}>
          <input type="text" className='project_input' placeholder="What's the new project?"  
          onChange= {(e) => setValue(e.target.value)} value={value} />
          <button  type="submit" className="project_button">New Project</button>
          
      </form>
    )
}
