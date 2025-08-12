import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './MazeControlsButton.module.css'

function MazeControlsButton({ icon, text, onClick, className, title }) {
  const combinedClasses = `${Styles.controlsButton} ${className || ''}`
  return (
    <button
      className={combinedClasses}
      type="button"
      onClick={onClick}
      title={title}
    >
      <FontAwesomeIcon icon={icon} />
      <span className={Styles['controlsButton__text']}>{text}</span>
    </button>
  )
}

export default MazeControlsButton
