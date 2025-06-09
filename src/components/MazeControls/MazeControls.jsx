import React from 'react'

import Styles from './MazeControls.module.css'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import MazeControlsButton from '../MazeControlsButton/MazeControlsButton'

function MazeControls({
  onToggleShowText,
  onToggleShowInstructions,
  pagesVisitedAmount,
}) {
  return (
    <div className={Styles.mazeControls}>
      <MazeControlsButton
        icon={faCircleInfo}
        text="Show Text"
        onClick={onToggleShowText}
      />
      <MazeControlsButton
        icon={faCircleInfo}
        text="Show Instructions"
        onClick={onToggleShowInstructions}
      />
      <span className={Styles.stepCounter}>Steps: {pagesVisitedAmount}</span>
    </div>
  )
}

export default MazeControls
