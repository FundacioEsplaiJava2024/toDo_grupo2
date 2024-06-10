import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ProjectComponent: React.FC<ProjectComponentProps> = ({ project }) => {
  return (
    <div className='Project'>
      <p>Mi puta madre</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}/>
        <FontAwesomeIcon icon={faTrash}/>
      </div>
    </div>
  )
}
