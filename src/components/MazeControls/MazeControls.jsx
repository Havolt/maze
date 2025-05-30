import React from 'react'

import Styles from './MazeControls.module.css'

function MazeControls({onToggleShowText, pagesVisitedAmount}) {
  return (
    <div className={Styles.mazeControls}>
      <button onClick={onToggleShowText}>Toggle text</button>
      <span className={Styles.stepCounter}>Steps: {pagesVisitedAmount}</span>
    </div>
  )
}

export default MazeControls