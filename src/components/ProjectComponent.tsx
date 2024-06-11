import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ProjectComponentProps } from '../types'
import React from 'react'

export const ProjectComponent: React.FC<ProjectComponentProps> = ({project,deleteproject}) => {
  return (
    <div className='Project'>
      <p>{project.projectName}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteproject(project.id)}/>
      </div>
    </div>
  )
}