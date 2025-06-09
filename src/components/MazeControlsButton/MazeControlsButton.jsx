import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from './MazeControlsButton.module.css'

function MazeControlsButton({ icon, text, onClick }) {
  return (
    <button className={Styles.mazeControlsButton} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </button>
  )
}

export default MazeControlsButton