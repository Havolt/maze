import { useContext } from 'react'

import Styles from './MazeControls.module.css'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import MazeControlsButton from '@/components/MazeControlsButton/MazeControlsButton'
import { MazeContext } from '@/store/MazeContext'

function MazeControls({ onToggleShowInstructions }) {
  const { toggleShowText, pagesVisited } = useContext(MazeContext)
  const pagesVisitedAmount = pagesVisited.length // +1 for the current page
  return (
    <div className={Styles.mazeControls}>
      <MazeControlsButton
        icon={faCircleInfo}
        text="Show Text"
        onClick={toggleShowText}
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
