import React from 'react'

import Styles from './MazeControls.module.css'

function MazeControls({onToggleShowText}) {
  return (
    <div className={Styles.mazeControls}>
      <button onClick={onToggleShowText}>Toggle text</button>
    </div>
  )
}

export default MazeControls