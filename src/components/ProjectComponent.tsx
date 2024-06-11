import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { ProjectComponentProps } from '../types'
import React from 'react'

export const ProjectComponent: React.FC<ProjectComponentProps> = ({project,deleteproject,editproject}) => {
  return (
    <div className='Project'>
      <p>{project.projectName}</p>
      <div className='icon_wrapper'>
        <FontAwesomeIcon icon={faPenToSquare}  onClick={() => editproject(project.id)} className='faIcon' />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteproject(project.id)} className='faIcon'/>
      </div>
    </div>
  )
}
