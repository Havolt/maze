import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './MazeControlsButton.module.css'

function MazeControlsButton({ icon, text, onClick, className }) {
  const combinedClasses = `${Styles.controlsButton} ${className || ''}`
  return (
    <button className={combinedClasses} type="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </button>
  )
}

export default MazeControlsButton
