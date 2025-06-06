import React from 'react'

import Styles from './MazeControls.module.css'
import MazeControlsButton from '../MazeControlsButton/MazeControlsButton'

function MazeControls({
  onToggleShowText,
  onToggleShowInstructions,
  pagesVisitedAmount,
}) {
  return (
    <div className={Styles.mazeControls}>
      {/* <MazeControlsButton /> */}
      <button onClick={onToggleShowText}>Toggle text</button>
      <button onClick={onToggleShowInstructions}>Show Instructions</button>
      <span className={Styles.stepCounter}>Steps: {pagesVisitedAmount}</span>
    </div>
  )
}

export default MazeControls
