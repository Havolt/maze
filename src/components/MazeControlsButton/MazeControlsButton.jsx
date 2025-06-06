import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import './MazeControlsButton.module.css'

function MazeControlsButton() {
  return (
    <div><FontAwesomeIcon icon={faCircleInfo} /></div>
  )
}

export default MazeControlsButton