import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Project } from '../types'


export const ProjectComponent: React.FC<ProjectComponentProps> = ({project,deleteproject,editproject}: ProjectComponentProps) => {
  return (
    <div className='Project'>
      <p>{project.projectName}</p>
      <div className='icon_wrapper'>
        <FontAwesomeIcon icon={faPenToSquare}  onClick={() => editproject(project.id)} className='faIcon' id="penIcon" />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteproject(project.id)} className='faIcon' id="trashIcon"/>
      </div>
    </div>
  )
}

export interface ProjectComponentProps {
  key: string;
  project: Project;
  deleteproject: (id: string) => void;
  editproject: (id: string) => void;
}