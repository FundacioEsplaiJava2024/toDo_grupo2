import React, { FormEvent, useState } from 'react'

export const ToDoForm: React.FC<ToDoFormProps> = ({ addTask, taskStatus, id }) => {
  //React.FC especifica el tipado de los atributos que recibe la función 
  const [value, setValue] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length < 1 || value.length > 16) {
      alert("Enter a name between 1 and 16 characters");
      return;
    }
    addTask(value, taskStatus, id);
    setValue("");
  }

  return (
    <form action="" className="project_form" onSubmit={handleSubmit}>
      <div className="form_styles">
        <input type="text" className='project_input' placeholder="   Create task"
          onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="project_button">New task</button>
      </div>
    </form>
  )
} 

export interface ToDoFormProps {
  addTask: (taskName: string, taskStatus: string, id:string) => void;
  taskStatus: string
  id: string
}

