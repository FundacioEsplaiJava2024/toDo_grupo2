import React, { FormEvent, useState } from 'react'


export const ProjectForm: React.FC<ProjectFormProps> = ({ addProject }) => {
  //React.FC especifica el tipado de los atributos que recibe la función 
  const [value, setValue] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length < 1 || value.length > 16) {
      alert("Enter a name between 1 and 16 characters");
      return;
    }
    addProject(value);
    setValue("");
  }

  return (
    <form action="" className="project_form" onSubmit={handleSubmit}>
      <div className="form_styles">
        <input type="text" className='project_input' placeholder="   Create project"
          onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="project_button">New Project</button>
      </div>
    </form>
  )
} 

export interface ProjectFormProps {
  addProject: (projectName: string) => void;
}
